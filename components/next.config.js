/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true, // Need to make it true for some versions of Next JS
  distDir: "build", // Defined build directory
  webpack: (config, options) => {
    // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "fe1",
        filename: "mainComponent.js", // remote file name which will used later
        remoteType: "var",
        exposes: {
          // expose all component here.
          "./Button": "./component/UI/Button/Button.jsx",
          "./UnstyledButton": "./component/UI/Button/UnstyledButton.jsx",
          "./SummaryCard": "./component/UI/Cards/SummaryCard.jsx",
          "./Modal": "./component/UI/Modal/Modal.jsx",
          "./DisplayTable": "./component/UI/Table/DisplayTable.jsx",
          "./InteractiveTable": "./component/UI/Table/InteractiveTable.jsx",
          "./CustomTable": "./component/UI/Table/CustomTable.jsx",
          "./Pagination": "./component/UI/Pagination.jsx",
          "./PasswordField": "./component/UI/PasswordField.jsx",
          "./TextField": "./component/UI/TextField.jsx",
          "./TextArea": "./component/UI/TextArea.jsx",
          "./SearchField": "./component/UI/SearchField.jsx",
          "./SelectField": "./component/UI/SelectField.jsx",
          "./UploadButton": "./component/UI/UploadButton.jsx",
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );
    return config;
  },
};

module.exports = nextConfig;
