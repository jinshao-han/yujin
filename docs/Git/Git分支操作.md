### Git 分支操作（创建、删除、合并分支）

```
git branch                    //查看所有分支
git branch <name>             //创建分支
git checkout <name>           //切换分支
git checkout -b <name>        //创建并切换分支

git branch -d <name>          //删除分支，无法删除未被合并的分支
git branch -D <name>          //强制删除分支，可以删除未被合并的分支

git merge <branch>             //将branch分支合并到当前分支，当前分支拥有branch分支的记录，branch分支不变
git merge <branch1> <branch2>  //将分支branch1合并到branch2
```

git 查看状态或记录

```
git status //  查看当前状态
git log  //显示当前分支的commit记录
```

回退

```
/*将HEAD移动到commit id对应的提交点*/
git reset <commit id>
/*工作区、暂存区和历史记录区都会被重置commit id提交点*/
git reset --hard <commit id>
```
