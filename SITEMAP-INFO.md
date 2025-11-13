# Sitemap Configuration

## 动态Sitemap生成

本项目使用Next.js的动态sitemap生成功能，而不是静态的sitemap.xml文件。

### 文件位置

- **动态生成器:** `app/sitemap.ts`
- **访问URL:** `https://arcraiderscheatsheet.org/sitemap.xml`

### 为什么使用动态Sitemap？

1. **自动更新:** 每次部署时自动生成最新的sitemap
2. **包含所有页面:** 自动包含70+个item页面
3. **动态内容:** 当添加新物品时，sitemap自动更新
4. **无需手动维护:** 不需要手动编辑XML文件

### Sitemap内容

动态生成的sitemap包含：

#### 静态页面 (9个)
- 首页 (priority: 1.0, daily)
- Items页面 (priority: 0.9, daily)
- Quests页面 (priority: 0.8, weekly)
- Workshop页面 (priority: 0.8, weekly)
- Guides页面 (priority: 0.7, weekly)
- Guides/Beginner (priority: 0.6, monthly)
- Guides/Advanced (priority: 0.6, monthly)
- Guides/Farming (priority: 0.6, monthly)
- Guides/Meta (priority: 0.6, weekly)

#### 动态页面 (70+个)
- 所有item详情页面 (priority: 0.5, weekly)
- 例如: `/items/leaper_pulse_unit`, `/items/arc_alloy`, 等

### 总计页面数

**79+ 页面** (9个静态页面 + 70+个动态item页面)

### 如何验证

1. **本地测试:**
   ```bash
   npm run build
   npm start
   # 访问 http://localhost:3000/sitemap.xml
   ```

2. **生产环境:**
   访问 https://arcraiderscheatsheet.org/sitemap.xml

### 重要提示

⚠️ **不要在 `public/` 文件夹中创建 `sitemap.xml` 文件！**

- `public/sitemap.xml` 会覆盖动态生成的sitemap
- 静态文件只包含少量页面，不利于SEO
- 始终使用 `app/sitemap.ts` 进行动态生成

### 提交到搜索引擎

提交以下URL到搜索引擎：

- **Google Search Console:** https://arcraiderscheatsheet.org/sitemap.xml
- **Bing Webmaster Tools:** https://arcraiderscheatsheet.org/sitemap.xml

### 更新Sitemap

当添加新页面时：

1. 如果是新的静态页面，在 `app/sitemap.ts` 的 `staticPages` 数组中添加
2. 如果是新的item，只需在 `lib/items-data.ts` 中添加，sitemap会自动包含
3. 重新部署应用，sitemap会自动更新

### 代码示例

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { items } from '@/lib/items-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arcraiderscheatsheet.org';
  const currentDate = new Date();

  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // ... 更多静态页面
  ];

  // 动态item页面
  const itemPages: MetadataRoute.Sitemap = items.map((item) => ({
    url: `${baseUrl}/items/${item.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...itemPages];
}
```

### SEO优势

✅ **完整的页面覆盖:** 所有页面都包含在sitemap中
✅ **自动更新:** 无需手动维护
✅ **优先级设置:** 重要页面有更高的优先级
✅ **更新频率:** 告诉搜索引擎多久检查一次
✅ **最后修改时间:** 帮助搜索引擎识别更新

### 故障排除

**问题:** Sitemap只显示5个页面
**原因:** `public/sitemap.xml` 存在并覆盖了动态sitemap
**解决:** 删除 `public/sitemap.xml` 文件

**问题:** 新添加的item没有出现在sitemap中
**原因:** 应用未重新部署
**解决:** 重新部署应用到生产环境

**问题:** Sitemap返回404
**原因:** `app/sitemap.ts` 文件不存在或有语法错误
**解决:** 检查文件是否存在，运行 `npm run build` 查看错误

---

**最后更新:** 2025-11-13
**状态:** ✅ 动态sitemap已启用，包含79+页面
