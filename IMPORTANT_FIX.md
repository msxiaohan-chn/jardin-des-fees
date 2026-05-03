# ⚠️ 重要修复说明

## 问题原因

您在 GitHub 上的 `assets/` 文件夹包含的是**旧版本**的 JavaScript 文件，其中仍然引用 `/manus-storage/` 路径。

## 解决方案

**必须替换 GitHub 上的 assets 文件夹！**

### 步骤：

1. **删除 GitHub 上的旧 assets 文件夹**
   - 进入您的 GitHub 仓库
   - 删除 `assets/` 文件夹中的所有文件

2. **上传新的 assets 文件夹**
   - 上传本压缩包中的 `assets/` 文件夹
   - 替换 `index.html` 文件

3. **验证文件结构**
   ```
   your-repo/
   ├── index.html                 ← 新版本
   ├── assets/                    ← 新版本
   │   ├── index-6EOnXy7e.css
   │   └── index-Bdshdl8P.js      ← 包含 ./images/ 路径
   └── images/                    ← 已存在
       └── (所有 33 张图片)
   ```

4. **清除缓存并刷新**
   - 按 `Ctrl + Shift + Delete` 清除浏览器缓存
   - 访问 https://aujardindesfees.com

## 验证方法

上传后，打开浏览器开发者工具 (F12)：
- 查看 Network 标签
- 图片 URL 应该是：`https://aujardindesfees.com/images/24Gerbe01.jpg`
- 而不是：`https://aujardindesfees.com/manus-storage/Gerbe01_12f4670e.jpg`

## 文件说明

- `index.html` - 主页面（已修复）
- `assets/index-6EOnXy7e.css` - 样式表
- `assets/index-Bdshdl8P.js` - JavaScript 应用（已修复，包含 ./images/ 路径）

---

**重要：** 必须替换 GitHub 上的 assets 文件夹，否则图片仍然无法显示。
