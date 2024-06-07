globalThis.require = {
    context: (directory, useSubdirectories = false, regExp = /\.js$/) => {
        const keys = ['example.png']; // Add keys that match the expected import pattern
        const context = (key) => {
            return key;
        };
        context.keys = () => keys;
        return context;
    }
};
