
<div align="center">
  <img src="https://klevere-pdf-storage.s3.eu-central-1.amazonaws.com/K-71811317-ab29-48ab-84b7-013aee89b4b9.png" alt="alt text">
</div>

# MCP DuckDuckGo Search

A Model Context Protocol (MCP) server querying DuckDuckGo Instant Answer API.

## Installation

### Installing via Smithery

To install DuckDuckGo Search for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@shaheen2013/duckduckgo-search-mcp-server):

```bash
npx -y @smithery/cli install @shaheen2013/duckduckgo-search-mcp-server --client claude
```

### Manual Installation
```bash
# Clone the repository
git clone https://github.com/shaheen2013/duckduckgo-search-mcp-server.git
cd duckduckgo-search-mcp-server

# Install dependencies
npm install

# Build the project
npm run build
```
### Docker

You can test this MCP server using Docker. To do this first run:

```bash
docker build -t duckduckgo-search-mcp-server .
docker run -p 8080:8080 duckduckgo-search-mcp-server
```

You can then test the server running within Docker via the inspector e.g.

```bash
pnpm run inspector http://localhost:8080
```


## Usage

### Running the Server

You can use the MCP Inspector to test the server:

```bash
npm run inspector
```

Access the MCP Inspector and then test the tool e.g.

![alt text](image.png)


## Development

### Project Structure

- `src/index.ts` - Main server implementation

### Available Scripts

- `npm run build` - Build the TypeScript code
- `npm run watch` - Watch for changes and rebuild
- `npm run inspector` - Run the MCP Inspector against the server


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- [Open Library API](https://openlibrary.org/developers/api)
- [Model Context Protocol](https://github.com/modelcontextprotocol)
