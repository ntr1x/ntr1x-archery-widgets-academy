"use strict";!function(e,a,t,i){a.component("academy-header",{template:"#academy-header",mixins:[t.WidgetMixin]})}(jQuery,Vue,Core,Widgets),function(e,a,t,i){var n=i.Widget(i.HeadersGroup,i.create({name:"academy-header",tag:"academy-header",mixins:[i.WidgetMixin,i.BoxMixin,i.SizeMixin],props:[{name:"logo",title:"Logo",type:"string",tab:"content"},{name:"promo",title:"Promo",type:"rich",tab:"content"},{name:"email",title:"Email",type:"string",tab:"content"},{name:"phone",title:"Phone",type:"string",tab:"content"},{name:"tw",title:"Twitter",type:"string",tab:"content"},{name:"gl",title:"Google+",type:"string",tab:"content"},{name:"fb",title:"Facebook",type:"string",tab:"content"},{name:"vk",title:"Vkontakte",type:"string",tab:"content"}]}));i.Item(i.HeadersGroup,{name:"academy-header",thumbnail:"/assets/vendor/ntr1x-archery-widgets-academy/src/header/header.png",widget:i.build(n,{outer:{value:{background:{value:"#F5F5F5"}}},inner:{value:{margin:{value:"0px auto"}}},width:{value:"1200px"},email:{value:"info@moscowacademy.com"},phone:{value:"+7 (495) 123-4567"},tw:{value:"https://twitter.com/bookAgolf"},fb:{value:"https://ru-ru.facebook.com/bookagolf"},gl:{value:"https://plus.google.com/communities/102202642996727382512"},logo:{value:"/assets/vendor/ntr1x-archery-widgets-academy/src/header/img/logo.png"},promo:{value:"\n                <h1>Voted the UK's<br />Leading Residential<br />Golf School</h1>\n                <h3>by Today’s Golfer Magazine</h3>\n            "}})})}(jQuery,Vue,Core,Widgets),function(e,a,t,i){a.component("academy-menu",{template:"#academy-menu",mixins:[t.WidgetMixin]})}(jQuery,Vue,Core,Widgets),function(e,a,t,i){var n=i.Props,o=i.Tabs,l=i.Widget(i.NavigationGroup,i.create({name:"academy-menu",tag:"academy-menu",mixins:[i.WidgetMixin,i.BoxMixin,i.SizeMixin],props:[{name:"items",title:"Items",type:"object",tab:"data",tabs:[o.Data,o.Appearance],props:[{name:"collection",title:"Collection",type:"multiple",tab:"data",tabs:[o.Data],props:[n.Margin,n.Padding,n.Background,{name:"vlink",title:"Vlink",type:"string",tab:"data"},{name:"href",title:"Href",type:"string",tab:"data"},{name:"title",title:"Title",type:"string",tab:"data"},{name:"active",title:"Active",type:"string",tab:"data"}]},{name:"style",title:"Style",type:"object",tab:"appearance",tabs:[o.Appearance],props:[n.Margin,n.Padding,n.Background]}]}]}));i.Item(i.NavigationGroup,{name:"academy-menu",thumbnail:"/assets/vendor/ntr1x-archery-widgets-academy/src/menu/menu.png",widget:i.build(l,{outer:{value:{background:{value:"#266181"}}},inner:{value:{margin:{value:"0px auto"}}},width:{value:"1200px"},items:{value:{style:{value:{padding:{value:"12px 16px"},margin:{value:"4px 2px"}}},collection:{value:[{vlink:{value:""},title:{value:"Home"},active:{value:!0}},{vlink:{value:"courses"},title:{value:"Courses"}},{vlink:{value:"about"},title:{value:"About"}}]}}}})})}(jQuery,Vue,Core,Widgets),function(e,a,t,i){var n=i.Props,o=i.Tabs,l=i.Widget(i.NavigationGroup,i.create({name:"academy-sitemap",tag:"academy-sitemap",mixins:[i.WidgetMixin,i.BoxMixin,i.SizeMixin],props:[{name:"items",title:"Items",type:"object",tab:"data",tabs:[o.Data,o.Appearance],props:[{name:"collection",title:"Collection",type:"multiple",tab:"data",tabs:[o.Data,o.Appearance],props:[n.Margin,n.Padding,n.Background,n.Vlink,n.Href,n.Title,{name:"items",title:"Items",type:"object",tab:"data",tabs:[o.Data,o.Appearance],props:[{name:"collection",title:"Collection",type:"multiple",tab:"data",tabs:[o.Data],props:[n.Margin,n.Padding,n.Background,n.Vlink,n.Href,n.Title]},{name:"style",title:"Item Style",type:"object",tab:"appearance",tabs:[o.Appearance],props:[n.Margin,n.Padding,n.Background]}]},{name:"head",title:"Head Style",type:"object",tab:"appearance",tabs:[o.Appearance],props:[n.Margin,n.Padding,n.Background]},{name:"body",title:"Body Style",type:"object",tab:"appearance",tabs:[o.Appearance],props:[n.Margin,n.Padding,n.Background]}]},{name:"style",title:"Item Style",type:"object",tab:"appearance",tabs:[o.Appearance],props:[n.Margin,n.Padding,n.Background]},{name:"head",title:"Head Style",type:"object",tab:"appearance",tabs:[o.Appearance],props:[n.Margin,n.Padding,n.Background]},{name:"body",title:"Body Style",type:"object",tab:"appearance",tabs:[o.Appearance],props:[n.Margin,n.Padding,n.Background]}]}]}));i.Item(i.NavigationGroup,{name:"academy-sitemap",thumbnail:"/assets/vendor/ntr1x-archery-widgets-academy/src/sitemap/sitemap.png",widget:i.build(l,{outer:{value:{background:{value:"#266181"}}},inner:{value:{margin:{value:"0px auto"}}},width:{value:"1200px"},items:{value:{collection:{value:[{title:{value:"Tuition Courses"},items:{value:{collection:{value:[{title:{value:"Beginner Schools"}},{title:{value:"Intermediate Schools"}},{title:{value:"Advanced Schools"}},{title:{value:"Specialist Schools"}}]}}}},{title:{value:"During Your Stay"},items:{value:{collection:{value:[{title:{value:"Golf Lodge"}},{title:{value:"Restaurant & Bar"}},{title:{value:"Places to Visit"}},{title:{value:"FAQ"}}]}}}},{title:{value:"About Us"},items:{value:{collection:{value:[{title:{value:"Why Us?"}},{title:{value:"Testimonials"}},{title:{value:"In the Media"}},{title:{value:"How to find us"}}]}}}}]}}}})})}(jQuery,Vue,Core,Widgets),function(e,a,t,i){a.component("academy-sitemap",{template:"#academy-sitemap",mixins:[t.WidgetMixin]})}(jQuery,Vue,Core,Widgets);
//# sourceMappingURL=widgets.js.map
