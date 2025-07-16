import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";

const server = new Server(
  {
    name: "mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "duckduckgo_search",
        description: "Search DuckDuckGo Instant Answer API for a query string",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string" },
          },
          required: ["query"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "duckduckgo_search") {
    const args = request.params.arguments as { query: string };

    if (!args || typeof args.query !== "string") {
      throw new Error("Invalid arguments for duckduckgo_search");
    }

    try {
      const apiUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(
        args.query
      )}&format=json`;
      const response = await axios.get(apiUrl);
      const data = response.data;

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    } catch (error: any) {
      throw new Error(error.message || "Failed to call DuckDuckGo API");
    }
  }

  throw new Error(`Unknown tool: ${request.params.name}`);
});

// Start the MCP server
const transport = new StdioServerTransport();
await server.connect(transport);
