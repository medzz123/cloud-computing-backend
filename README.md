## Getting Started
Install `yarn` https://classic.yarnpkg.com/en/ 
On macOS you can do `brew install yarn` 

Install `node` https://nodejs.org/en/

Go the project root directory and run `yarn`

**Strongly recommend using VSCode**

Install the extensions recommended by the editor.

## Developments commands:
To run the development server:

```bash
yarn dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

To run linting:
```bash
yarn lint
```

You can run the following command to auto fix all linting errors that are fixable:

```bash
yarn lint:fix
```

## Committing code:
There is `commitlint` and `husky` installed which will make sure that linting is correct, and that commit messages follow structure. 

Commit in the following structure: 

```bash
git commit -m "feat(general): your message for the commit"
```

You can replace `feat` and `general` for any other string.