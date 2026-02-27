import React from "react";

const navigationData = [
  {
    title: "Product Details",
    path: "/products/electronics/",
    id: "SKU-99203",
    fullUrl: "https://api.store.com/products/electronics/SKU-99203",
  },
  {
    title: "User Profile",
    path: "/users/settings/",
    id: "user_88x_921",
    fullUrl: "https://app.service.com/users/settings/user_88x_921",
  },
  {
    title: "Support Ticket",
    path: "/help/tickets/view/",
    id: "TKT-4402",
    fullUrl: "https://support.platform.com/help/tickets/view/TKT-4402",
  },
  {
    title: "Article Content",
    path: "/blog/archive/2026/",
    id: "how-to-build-ai-01",
    fullUrl: "https://blog.site.com/blog/archive/2026/how-to-build-ai-01",
  },
  {
    title: "Order History",
    path: "/account/orders/details/",
    id: "ORD-776219",
    fullUrl: "https://shop.com/account/orders/details/ORD-776219",
  },
];

const CustomNav = () => {
  return (
    <nav>
      {/* one system */}
      {/* <ul className="flex gap-2">
        <li href="/">Home</li>
        <li href="/about">About</li>
        <li href="/blog">Blog</li>
      </ul> */}

      <ul className="flex gap-4">
        {navigationData.map((route) => (
          <li>
            {" "}
            <a href={route.fullUrl}>{route.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;
