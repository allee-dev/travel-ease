# 🧭 Contributing Guide: TravelEase Website Project

Welcome to the **TravelEase - Northern Pakistan Tourism Website** collaborative project! This guide outlines how to contribute effectively using GitHub, Git Flow, and CI/CD workflows.

---

## ✅ Who Can Contribute
Only team members added as **collaborators** by the Team Lead should contribute directly. **DO NOT FORK** the repository.

---

## 📥 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/allee-dev/travel-ease.git
cd travel-ease
```

### 2. Configure Git Identity (Required)
```bash
git config user.name "your name in lower case"   # Use your name
git config user.email "fa21-bse-123@ucp.edu.pk"  # Use your UCP email
```

---

## 🌿 Branching Strategy (Git Flow)

| Task Type         | Branch Prefix     | Example                      |
|------------------|-------------------|------------------------------|
| Feature/Page      | `feature/`        | `feature/contact-page`       |
| Workflow          | `workflow/`       | `workflow/dev-deploy`        |
| Bug Fix           | `bugfix/`         | `bugfix/staging-form-error`  |
| Release           | `release/`        | `release/v1`                 |

---

## 🚧 Making Changes

### 1. Create a Branch from `develop`
```bash
git checkout -b feature/home-page origin/develop
```

### 2. Add Your Files
- Create/edit `.html` and `.css` in the correct folder (e.g., `src/pages/`)
- Add CI workflow if assigned under `.github/workflows/`

### 3. Lint and Build Locally (Optional)
```bash
npx htmlhint "src/**/*.html"
npx stylelint "**/*.css"
npm run build
```

### 4. Commit and Push
```bash
git add .
git commit -m "Add Home Page markup and styles"
git push origin feature/home-page
```

---

## 🔁 Submitting a Pull Request
1. Open PR to **`develop` branch**.
2. Use a clear title (e.g., "Add Home Page layout")
3. In the PR description:
   - Link your issue using:
     ```
     Fixes #<issue-number>
     ```
   - Mention what was added or changed
4. Add other team members as **Reviewers**
5. Wait for PR checks (lint/build) to pass
6. Merge only after at least one approval

---

## 📦 Linting Rules
- HTML: [`htmlhint`](https://github.com/htmlhint/HTMLHint)
- CSS: [`stylelint`](https://stylelint.io/) with `stylelint-config-standard`

Linting is run in CI but must pass before PR is merged. You can also test locally with:
```bash
npm run lint
```

---

## 🚀 Deployment Workflow
| Branch     | Environment     | Deployment Trigger |
|------------|------------------|---------------------|
| `develop`  | Development      | On push             |
| `release`  | Staging          | On push             |
| `production`| Production      | On push             |

Each branch has CI/CD workflows managed in `.github/workflows/`.

---

## 📞 Need Help?
- Ask questions in the GitHub Discussions tab (if enabled)
- Or tag the Team Lead in the PR comments

---

Happy contributing! ✨

