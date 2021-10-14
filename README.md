
https://www.digitalcrafts.com/blog/learn-how-start-new-group-project-github

1. git clone https://github/{user}/{repo}.git
2. git checkout -b {branchName}
3. Work on code

While working on feature:

4. git commit 
5. git push origin {branchName}

To merge your own code with repo code:

6. Go to own github and create new request


To update your local code with repo code:
7. git checkout main
8. git pull --> updates local main with repo code
9. git checkout {branchName}
10. git merge main --> updates local branch with local main
