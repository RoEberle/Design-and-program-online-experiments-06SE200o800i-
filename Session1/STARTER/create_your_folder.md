## 1.2.1 Simply create your own folder under Session1:

1. copy STARTER folder
2. paste it under Session1 folder
3. rename the copy folder as your name
4. Commit-Sync changes

## If you ever have a Git divergence issue issue, please Merge (Preserve Both Histories)!

when your local main branch and the remote main branch have different commit histories and Git doesn't know how to reconcile them.

In your terminal, try:
<br>
`git config pull.rebase false`
<br>
`git pull origin main`