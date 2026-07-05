---
title: "This site is a repo"
date: 2026-07-05
description: "No CMS, no backend, no login — publishing here is a git push."
---

This website has no backend, no database, and no admin panel. It's a
public GitHub repository with markdown files in a folder. When I want to
publish something, I write a `.md` file, commit, and push — a GitHub
Action rebuilds the site and it's live a minute later.

That's the whole content management system:

```
src/content/blog/some-thought.md   ← write
git push                           ← publish
```

I like this arrangement for the same reasons I build
[AgentWhisper](https://chrisschroedinger.github.io/AgentWhisper/) the
way I do: the simplest thing that works is usually the thing that keeps
working. Plain text ages well. Git remembers everything. And there's
nothing to maintain, patch, or pay for.

It also means the writing lives in the same place as the code — same
workflow, same history, same collaborators. Most of what I ship is
pair-programmed with AI agents, and the commit log of this very site
says so. That's not something I hide; working out how to build
*with* agents — properly, not as a party trick — is most of what I
expect to write about here.

More soon.
