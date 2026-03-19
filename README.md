# Sample Node.js (Express) + Azure DevOps YAML

This is a tiny Express service meant to be built and deployed using an `azure-pipelines.yml` file.

## Local run

```bash
cd sample-nodejs-ado
npm install
npm start
```

Open: `http://localhost:3000/`

## Azure DevOps pipeline

1. In Azure DevOps, create an `Azure Resource Manager` service connection.
2. Update the placeholders in `azure-pipelines.yml`:
   - `YOUR_AZURE_RM_SERVICE_CONNECTION` (service connection name)
   - `YOUR_WEBAPP_NAME` (Azure App Service name)
3. Ensure your App Service is a Web App for Linux (recommended with this pipeline).
4. Commit the sample + YAML and run the pipeline.

If you want a different target (AKS, Functions, etc.), tell me which one and I’ll adjust the YAML.

