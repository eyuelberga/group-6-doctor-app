## Setup the Project

The following steps will get you up and running to contribute to the Doctor App:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/eyuelberga/group-6-doctor-app))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/group-6-doctor-app.git
cd 
```

3. Setup all the dependencies and packages by running `npm install` on both the `client` folder and `api` folder. This
   command will install dependencies.

## Development

The project has two main directories. 
- `client`: is the React frontend for the project
- `api`: is the backend running on Express


## Making a Pull Request?


### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the group-6-doctor-app repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `feat/exam-page` or `bug/create-exam-error`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work. [How to create a new branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)

3. Make and commit your changes following the
   [commit convention](https://github.com/eyuelberga/group-6-doctor-app/blob/main/CONTRIBUTING.md#commit-convention).

4. Create your PR with along with a description of your code. [How to create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
