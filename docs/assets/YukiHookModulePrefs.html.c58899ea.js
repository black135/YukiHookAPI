import{_ as l,r as p,o as t,c,b as o,d as n,a,e as s}from"./app.a3fd8dd4.js";const r={},d=a(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="yukihookmoduleprefs-class" tabindex="-1"><a class="header-anchor" href="#yukihookmoduleprefs-class" aria-hidden="true">#</a> YukiHookModulePrefs <span class="symbol">- class</span></h1><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiHookModulePrefs</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> context</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Context?</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5B9E\u73B0 Xposed \u6A21\u5757\u7684\u6570\u636E\u5B58\u53D6\uFF0C\u5BF9\u63A5 <code>SharedPreferences</code> \u548C <code>XSharedPreferences</code>\u3002</p></blockquote><p>\u5728\u4E0D\u540C\u73AF\u5883\u667A\u80FD\u9009\u62E9\u5B58\u53D6\u4F7F\u7528\u7684\u5BF9\u8C61\u3002</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>\u6B64\u529F\u80FD\u4E3A\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EC5\u5728 LSPosed \u73AF\u5883\u6D4B\u8BD5\u901A\u8FC7\uFF0CEdXposed \u7406\u8BBA\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4F46\u4E0D\u518D\u63A8\u8350\u3002</p></div><p>\u4F7F\u7528 LSPosed \u73AF\u5883\u8BF7\u5728 <code>AndroidManifests.xml</code> \u4E2D\u5C06 <code>xposedminversion</code> \u6700\u4F4E\u8BBE\u7F6E\u4E3A <code>93</code>\u3002</p>`,10),i=s("\u8BE6\u89C1 "),y={href:"https://github.com/LSPosed/LSPosed/wiki/New-XSharedPreferences#for-the-module",target:"_blank",rel:"noopener noreferrer"},u=s("New XSharedPreferences"),g=s("\u3002"),h=o("p",null,[s("\u82E5\u4F60\u5728\u6309\u7167\u89C4\u5B9A\u914D\u7F6E\u540E\u4F9D\u7136\u65E0\u6CD5\u4F7F\u7528\u6216\u51FA\u73B0\u6587\u4EF6\u6743\u9650\u9519\u8BEF\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u8003 "),o("a",{href:"../../../YukiHookAPI#isenablehooksharedpreferences-field"},"isEnableHookSharedPreferences"),s("\u3002")],-1),A=o("p",null,[s("\u672A\u4F7F\u7528 LSPosed \u73AF\u5883\u8BF7\u5C06\u4F60\u7684\u6A21\u5757 "),o("code",null,"API"),s(" \u964D\u81F3 "),o("code",null,"26"),s(" \u4EE5\u4E0B\uFF0C"),o("code",null,"YukiHookAPI"),s(" \u5C06\u4F1A\u5C1D\u8BD5\u4F7F\u7528 "),o("code",null,"makeWorldReadable"),s(" \u4F46\u4ECD\u6709\u53EF\u80FD\u4E0D\u6210\u529F\u3002")],-1),F=s("\u592A\u6781\u8BF7\u53C2\u9605 "),B={href:"https://taichi.cool/zh/doc/for-xposed-dev.html#%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90-%E9%85%8D%E7%BD%AE-xsharedpreference",target:"_blank",rel:"noopener noreferrer"},C=s("\u6587\u4EF6\u6743\u9650/\u914D\u7F6E/XSharedPreference"),D=s("\u3002"),k=a('<div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>\u5F53\u4F60\u5728 Xposed \u6A21\u5757\u4E2D\u5B58\u53D6\u6570\u636E\u7684\u65F6\u5019 <strong>context</strong> \u5FC5\u987B\u4E0D\u80FD\u662F\u7A7A\u7684\u3002</p></div><p>\u82E5\u4F60\u6B63\u5728\u4F7F\u7528 <code>PreferenceFragmentCompat</code>\uFF0C\u8BF7\u8FC1\u79FB\u5230 <code>ModulePreferenceFragment</code> \u4EE5\u9002\u914D\u4E0A\u8FF0\u529F\u80FD\u7279\u6027\u3002</p><p><strong>Optional Configuration</strong></p><p>\u82E5\u4F60\u4E0D\u60F3\u5C06\u4F60\u7684\u6A21\u5757\u7684 <code>xposedminversion</code> \u6700\u4F4E\u8BBE\u7F6E\u4E3A <code>93</code>\uFF0C\u4F60\u53EF\u4EE5\u5728 <code>AndroidManifest.xml</code> \u4E2D\u6DFB\u52A0 <code>xposedsharedprefs</code> \u6765\u5B9E\u73B0\u652F\u6301\u3002</p>',4),m=s("\u8BE6\u89C1 "),v={href:"https://github.com/LSPosed/LSPosed/wiki/New-XSharedPreferences#for-the-module",target:"_blank",rel:"noopener noreferrer"},b=s("New XSharedPreferences"),f=s("\u3002"),x=a(`<blockquote><p>The following example</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedsharedprefs&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;true&quot;</span><span style="color:#ADBAC7;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 class="deprecated">isXSharePrefsReadable - field</h2><p><strong>Change Records</strong></p><p><code>v1.0.90</code> <code>added</code></p><p><code>v1.1.5</code> <code>deprecated</code></p><p>\u8BF7\u8F6C\u79FB\u5230 <code>isPreferencesAvailable</code></p><h2 class="deprecated">isRunInNewXShareMode - field</h2><p><strong>Change Records</strong></p><p><code>v1.0.78</code> <code>added</code></p><p><code>v1.1.5</code> <code>deprecated</code></p><p>\u8BF7\u8F6C\u79FB\u5230 <code>isPreferencesAvailable</code></p><h2 id="ispreferencesavailable-field" tabindex="-1"><a class="header-anchor" href="#ispreferencesavailable-field" aria-hidden="true">#</a> isPreferencesAvailable <span class="symbol">- field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isPreferencesAvailable</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.5</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6\u5F53\u524D <code>YukiHookModulePrefs</code> \u7684\u53EF\u7528\u72B6\u6001\u3002</p></blockquote><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E2D\u8FD4\u56DE <code>XSharedPreferences</code> \u53EF\u7528\u72B6\u6001 (\u53EF\u8BFB)\u3002</p><p>\u5728\u6A21\u5757\u73AF\u5883\u4E2D\u8FD4\u56DE\u5F53\u524D\u662F\u5426\u5904\u4E8E New XSharedPreferences \u6A21\u5F0F (\u53EF\u8BFB\u53EF\u5199)\u3002</p><h2 id="name-method" tabindex="-1"><a class="header-anchor" href="#name-method" aria-hidden="true">#</a> name <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;">(name</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiHookModulePrefs</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u81EA\u5B9A\u4E49 Sp \u5B58\u50A8\u540D\u79F0\u3002</p></blockquote><p><strong>Function Example</strong></p><p>\u5728 <code>Activity</code> \u4E2D\u7684\u4F7F\u7528\u65B9\u6CD5\u3002</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">modulePrefs(</span><span style="color:#96D0FF;">&quot;custom_name&quot;</span><span style="color:#ADBAC7;">).getString(</span><span style="color:#96D0FF;">&quot;custom_key&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883 <code>PackageParam</code> \u4E2D\u7684\u4F7F\u7528\u65B9\u6CD5\u3002</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">prefs(</span><span style="color:#96D0FF;">&quot;custom_name&quot;</span><span style="color:#ADBAC7;">).getString(</span><span style="color:#96D0FF;">&quot;custom_key&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="direct-method" tabindex="-1"><a class="header-anchor" href="#direct-method" aria-hidden="true">#</a> direct <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">direct</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiHookModulePrefs</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.5</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5FFD\u7565\u7F13\u5B58\u76F4\u63A5\u8BFB\u53D6\u952E\u503C\u3002</p></blockquote><p>\u65E0\u8BBA\u662F\u5426\u5F00\u542F <code>YukiHookAPI.Configs.isEnableModulePrefsCache</code>\u3002</p><p>\u4EC5\u5728 <code>XSharedPreferences</code> \u4E0B\u751F\u6548\u3002</p><h2 id="getstring-method" tabindex="-1"><a class="header-anchor" href="#getstring-method" aria-hidden="true">#</a> getString <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getString</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6 <code>String</code> \u952E\u503C\u3002</p></blockquote><h2 id="getstringset-method" tabindex="-1"><a class="header-anchor" href="#getstringset-method" aria-hidden="true">#</a> getStringSet <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getStringSet</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Set</span><span style="color:#F47067;">&lt;</span><span style="color:#6CB6FF;">String</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Set</span><span style="color:#F47067;">&lt;</span><span style="color:#6CB6FF;">String</span><span style="color:#F47067;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6 <code>Set&lt;String&gt;</code> \u952E\u503C\u3002</p></blockquote><h2 id="getboolean-method" tabindex="-1"><a class="header-anchor" href="#getboolean-method" aria-hidden="true">#</a> getBoolean <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getBoolean</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6 <code>Boolean</code> \u952E\u503C\u3002</p></blockquote><h2 id="getint-method" tabindex="-1"><a class="header-anchor" href="#getint-method" aria-hidden="true">#</a> getInt <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getInt</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Int</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6 <code>Int</code> \u952E\u503C\u3002</p></blockquote><h2 id="getlong-method" tabindex="-1"><a class="header-anchor" href="#getlong-method" aria-hidden="true">#</a> getLong <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getLong</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Long</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Long</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6 <code>Long</code> \u952E\u503C\u3002</p></blockquote><h2 id="getfloat-method" tabindex="-1"><a class="header-anchor" href="#getfloat-method" aria-hidden="true">#</a> getFloat <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getFloat</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Float</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Float</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6 <code>Float</code> \u952E\u503C\u3002</p></blockquote><h2 id="all-method" tabindex="-1"><a class="header-anchor" href="#all-method" aria-hidden="true">#</a> all <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">all</span><span style="color:#ADBAC7;">()</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HashMap</span><span style="color:#F47067;">&lt;</span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">Any?</span><span style="color:#F47067;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u83B7\u53D6\u5168\u90E8\u5B58\u50A8\u7684\u952E\u503C\u6570\u636E\u3002</p></blockquote><p>\u667A\u80FD\u8BC6\u522B\u5BF9\u5E94\u73AF\u5883\u8BFB\u53D6\u952E\u503C\u6570\u636E\u3002</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>\u6BCF\u6B21\u8C03\u7528\u90FD\u4F1A\u83B7\u53D6\u5B9E\u65F6\u7684\u6570\u636E\uFF0C\u4E0D\u53D7\u7F13\u5B58\u63A7\u5236\uFF0C\u8BF7\u52FF\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E2D\u4F7F\u7528\u3002</p></div><h2 id="remove-method" tabindex="-1"><a class="header-anchor" href="#remove-method" aria-hidden="true">#</a> remove <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">remove</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u79FB\u9664\u5168\u90E8\u5305\u542B <code>key</code> \u7684\u5B58\u50A8\u6570\u636E\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="remove-method-1" tabindex="-1"><a class="header-anchor" href="#remove-method-1" aria-hidden="true">#</a> remove <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&lt;</span><span style="color:#DCBDFB;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">remove</span><span style="color:#ADBAC7;">(prefs</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">PrefsData</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u79FB\u9664 <code>PrefsData.key</code> \u7684\u5B58\u50A8\u6570\u636E\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="clear-method" tabindex="-1"><a class="header-anchor" href="#clear-method" aria-hidden="true">#</a> clear <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">clear</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u79FB\u9664\u5168\u90E8\u5B58\u50A8\u6570\u636E\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="putstring-method" tabindex="-1"><a class="header-anchor" href="#putstring-method" aria-hidden="true">#</a> putString <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5B58\u50A8 <code>String</code> \u952E\u503C\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="putstringset-method" tabindex="-1"><a class="header-anchor" href="#putstringset-method" aria-hidden="true">#</a> putStringSet <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putStringSet</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Set</span><span style="color:#F47067;">&lt;</span><span style="color:#6CB6FF;">String</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5B58\u50A8 <code>Set&lt;String&gt;</code> \u952E\u503C\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="putboolean-method" tabindex="-1"><a class="header-anchor" href="#putboolean-method" aria-hidden="true">#</a> putBoolean <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putBoolean</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5B58\u50A8 <code>Boolean</code> \u952E\u503C\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="putint-method" tabindex="-1"><a class="header-anchor" href="#putint-method" aria-hidden="true">#</a> putInt <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putInt</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Int</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5B58\u50A8 <code>Int</code> \u952E\u503C\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="putlong-method" tabindex="-1"><a class="header-anchor" href="#putlong-method" aria-hidden="true">#</a> putLong <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putLong</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Long</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5B58\u50A8 <code>Long</code> \u952E\u503C\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="putfloat-method" tabindex="-1"><a class="header-anchor" href="#putfloat-method" aria-hidden="true">#</a> putFloat <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putFloat</span><span style="color:#ADBAC7;">(key</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Float</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u5B58\u50A8 <code>Float</code> \u952E\u503C\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="get-method" tabindex="-1"><a class="header-anchor" href="#get-method" aria-hidden="true">#</a> get <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&lt;</span><span style="color:#DCBDFB;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(prefs</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">PrefsData</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">)</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u667A\u80FD\u83B7\u53D6\u6307\u5B9A\u7C7B\u578B\u7684\u952E\u503C\u3002</p></blockquote><h2 id="put-method" tabindex="-1"><a class="header-anchor" href="#put-method" aria-hidden="true">#</a> put <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&lt;</span><span style="color:#DCBDFB;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(prefs</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">PrefsData</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">, value</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u667A\u80FD\u5B58\u50A8\u6307\u5B9A\u7C7B\u578B\u7684\u952E\u503C\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E0B\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h2 id="clearcache-method" tabindex="-1"><a class="header-anchor" href="#clearcache-method" aria-hidden="true">#</a> clearCache <span class="symbol">- method</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">clearCache</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.5</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u6E05\u9664 <code>XSharedPreferences</code> \u4E2D\u7F13\u5B58\u7684\u952E\u503C\u6570\u636E\u3002</p></blockquote><p>\u65E0\u8BBA\u662F\u5426\u5F00\u542F <code>YukiHookAPI.Configs.isEnableModulePrefsCache</code>\u3002</p><p>\u8C03\u7528\u6B64\u65B9\u6CD5\u5C06\u6E05\u9664\u5F53\u524D\u5B58\u50A8\u7684\u5168\u90E8\u952E\u503C\u7F13\u5B58\u3002</p><p>\u4E0B\u6B21\u5C06\u4ECE <code>XSharedPreferences</code> \u91CD\u65B0\u8BFB\u53D6\u3002</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u4E2D\u4F7F\u7528\u3002</p>`,171);function S(q,_){const e=p("ExternalLinkIcon");return t(),c("div",null,[d,o("p",null,[i,o("a",y,[u,n(e)]),g]),h,A,o("p",null,[F,o("a",B,[C,n(e)]),D]),k,o("p",null,[m,o("a",v,[b,n(e)]),f]),x])}const I=l(r,[["render",S],["__file","YukiHookModulePrefs.html.vue"]]);export{I as default};