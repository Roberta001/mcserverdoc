import{_ as d,c as a,a0 as e,o as r}from"./chunks/framework.p2VkXzrt.js";const b=JSON.parse('{"title":"命令","description":"","frontmatter":{},"headers":[],"relativePath":"guide/command.md","filePath":"guide/command.md"}'),h={name:"guide/command.md"};function o(c,t,l,n,s,i){return r(),a("div",null,t[0]||(t[0]=[e('<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><p>下面列举的是服务器常用命令。</p><h2 id="auth-登录" tabindex="-1">Auth(登录) <a class="header-anchor" href="#auth-登录" aria-label="Permalink to &quot;Auth(登录)&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>用法示例</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>/register 密码 确认密码</td><td>注册账号</td><td>/register 123456 123456</td><td>用于新玩家创建账号。</td><td>所有玩家</td></tr><tr><td>/login 密码</td><td>登录游戏</td><td>/login 123456</td><td>用于验证玩家身份。</td><td>所有玩家</td></tr><tr><td>/account changePassword 旧密码 新密码</td><td>修改密码</td><td>/account changePassword 123456 654321</td><td>修改当前账号的密码。</td><td>已注册玩家</td></tr></tbody></table><h2 id="teleport-传送" tabindex="-1">Teleport(传送) <a class="header-anchor" href="#teleport-传送" aria-label="Permalink to &quot;Teleport(传送)&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>用法示例</th><th>说明</th><th>冷却时间</th></tr></thead><tbody><tr><td>/tpa 玩家ID</td><td>向其他玩家发送传送请求</td><td>/tpa playername</td><td>发送请求给名为playername的玩家。</td><td>30秒</td></tr><tr><td>/tpaaccept</td><td>接受传送请求</td><td>/tpaaccept</td><td>接受来自其他玩家的传送请求。</td><td>无</td></tr><tr><td>/tpacancel</td><td>取消传送请求</td><td>/tpacancel</td><td>取消当前的传送请求或拒绝其他玩家的请求。</td><td>无</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><p>你可以直接点击请求中的×取消请求，或点击√同意请求。</p></div><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>用法示例</th><th>说明</th><th>冷却时间</th></tr></thead><tbody><tr><td>/sethome</td><td>设置家园</td><td>/sethome</td><td>将当前位置标记为家园，方便下次快速返回。</td><td>60秒</td></tr><tr><td>/home</td><td>返回家园</td><td>/home</td><td>传送至之前设置的家园位置。</td><td>60秒</td></tr><tr><td>/back</td><td>返回上一步</td><td>/back</td><td>传送至上一次所在的位置，方便探索地图。</td><td>60秒</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">警告</p><p>在传送期间请不要移动，否则传送将会被打断。</p></div><h2 id="carpet-地毯" tabindex="-1">Carpet(地毯) <a class="header-anchor" href="#carpet-地毯" aria-label="Permalink to &quot;Carpet(地毯)&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>说明</th></tr></thead><tbody><tr><td>/log tps</td><td>订阅 TPS 日志</td><td>执行此命令后，服务器会开始在玩家列表中显示实时 TPS 信息。</td></tr><tr><td>/log tps clear</td><td>取消订阅 TPS 日志</td><td>执行此命令后，服务器将停止显示 TPS 信息。</td></tr></tbody></table>',11)]))}const m=d(h,[["render",o]]);export{b as __pageData,m as default};