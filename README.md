# Jardin des Fées - 静态网站文件

这是 Jardin des Fées 花店网站的静态 HTML/CSS/JS 构建版本，可以直接上传到 GitHub Pages。

## 文件结构

```
jardin-des-fees-static/
├── index.html              # 主页面文件
├── assets/
│   ├── index-*.css        # 样式表（已压缩）
│   └── index-*.js         # JavaScript 文件（已压缩）
└── README.md              # 本文件
```

## 上传到 GitHub Pages

### 方法 1：直接上传到现有仓库的 `gh-pages` 分支

1. **解压文件**
   ```bash
   unzip jardin-des-fees-static.zip
   cd jardin-des-fees-static
   ```

2. **创建或切换到 `gh-pages` 分支**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   ```

3. **添加静态文件**
   ```bash
   # 复制解压后的文件到仓库根目录
   cp -r jardin-des-fees-static/* .
   ```

4. **提交并推送**
   ```bash
   git add .
   git commit -m "Deploy static website to GitHub Pages"
   git push origin gh-pages
   ```

5. **配置 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - 选择 "Deploy from a branch"
   - 分支选择 `gh-pages`，目录选择 `/ (root)`
   - 保存

### 方法 2：上传到 `main` 分支的 `docs/` 文件夹

1. **在仓库根目录创建 `docs/` 文件夹**
   ```bash
   mkdir docs
   ```

2. **复制静态文件到 `docs/` 文件夹**
   ```bash
   cp -r jardin-des-fees-static/* docs/
   ```

3. **提交并推送**
   ```bash
   git add docs/
   git commit -m "Deploy static website to docs folder"
   git push origin main
   ```

4. **配置 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - 选择 "Deploy from a branch"
   - 分支选择 `main`，目录选择 `/docs`
   - 保存

## 访问网站

部署完成后，您可以通过以下 URL 访问网站：
- 如果使用默认域名：`https://<username>.github.io/<repository-name>/`
- 如果配置了自定义域名：`https://your-domain.com/`

## 注意事项

- 所有图片资源已通过 `/manus-storage/` 链接集成，无需额外配置
- 网站是完全静态的，无需服务器端处理
- 所有样式和交互都已包含在 `assets/` 文件夹中
- 如需更新内容，请重新构建项目并上传新的文件

## 文件大小

- index.html: ~368 KB
- CSS: ~116 KB (gzip: ~19 KB)
- JavaScript: ~574 KB (gzip: ~169 KB)
- 总计: ~286 KB (压缩后)

---

**构建时间**: 2026-05-03  
**项目**: Jardin des Fées - Fleuriste à Palaiseau
