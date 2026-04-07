# 🚩 Git The Flag — Case 04: The Inside Job

> **Advanced. Complete Cases 01–03 first.**

---

## Story

Something broke in production last week. Silently.
No incident report. No explanation. The team has been pointing fingers.

You have the repo. You have git.
Find who introduced the bug, when, and why.
Then fix it.

---

## Before you start

You should know everything from Cases 01–03:
- `clone` · `branch` · `checkout` · `log` · `diff` · `show` · `tag` · `fsck`
- `stash` · `rebase` · `cherry-pick` · `reflog`

---

## New commands

### git bisect

Binary-searches the commit history to find which commit introduced a bug.

```bash
git bisect start
git bisect bad                  # current commit is broken
git bisect good <hash-or-tag>   # this old commit was working
# git checks out a middle commit — test it, then:
git bisect good                 # test passes — bug not here yet
git bisect bad                  # test fails — bug already present
# repeat until git identifies the exact commit
git bisect reset                # return to HEAD when done
```

To test `checkVersion()`:

```bash
node -e "const {checkVersion} = require('./utils'); console.log(checkVersion())"
# true = good commit, false = bad commit
```

The last known working release is tagged `v1.0.0-stable`.

### git blame

Shows which commit last modified each line of a file.

```bash
git blame <file>              # line-by-line: hash · author · date · content
git blame -L 10,20 <file>    # blame only lines 10–20
```

### Merge conflicts

When two branches modify the same line, git cannot auto-merge.

```bash
git merge feature/audit       # triggers conflict on security.js
# conflict markers appear in the file:
# <<<<<<< HEAD
# your version
# =======
# their version
# >>>>>>> feature/audit
git merge --abort             # cancel and go back if needed
```

### git notes — internals

Commits can carry invisible annotations that do not appear in `git log` by default.

```bash
git fetch origin refs/notes/commits:refs/notes/commits   # fetch remote notes
git log --notes --oneline                                 # show notes inline
git notes show <hash>                                     # read one note
```

---

## Objectives

| # | Hint | Command |
|---|------|---------|
| 1 | Production broke after one commit — find which one | `git bisect` |
| 2 | Someone added a suspicious line — find who | `git blame` |
| 3 | Two branches disagree on the same line | `git merge feature/audit` |
| 4 | Some commits carry invisible annotations | `git notes` |

**Final task:** Fix the bug found by bisect. Open a Pull Request to `main`. CI will run `checkVersion()` and verify the fix.

---

## How to submit a flag

Open a new [Issue](../../issues/new) and use the flag as the title:

```
GTF{the_flag_you_found}
```

A bot replies instantly. ✅

> Stuck? Comment `hint` on any issue and the bot will guide you.

---

## Glossary

| Command | What it does |
|---------|--------------|
| `git bisect` | Binary-search history to find the commit that introduced a bug |
| `git blame <file>` | Show which commit last touched each line |
| `git merge` | Combine branches — conflicts appear when both changed the same line |
| `git notes` | Read invisible annotations attached to commits |
