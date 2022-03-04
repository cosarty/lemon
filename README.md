## 一个自己搭的框架

## git commit 规范

> <type>(<scope>): <subject> [<ISSUE_ID>]
>
> <body>
> <footer>

- type [必须]
  用于说明 commit 的类别，只允许使用下面几种标识：

feat：新功能（feature）
fix：修补 bug
delete: 删除功能
style: 样式相关
merge：合并代码
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
perf：优化
revert：撤销上一次的 commit
docs：文档（documentation）
test：增加测试
chore：构建过程或辅助工具的变动
build：影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）
ci：对我们的 CI 配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs）

- scope [必须]
  用于说明修改的范围，基本上有有以下几种情形：

all：表示大范围的修改
location：表示小范围的修改
module：表示修改了某个模块 例如：feat(user): add user login

- ISSUE_ID [可选]
  添加在 git issues 中需求或者 bug 修复对应的 issues 记录 ID

- body [可选]
  body 中就是 subject 的详细说明

- footer [可选]
  可以写备注，填写相关的需求管理 issues id

例
feat(user): Add user login [777]
