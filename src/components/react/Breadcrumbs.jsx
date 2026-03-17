import { Breadcrumb } from "antd";

export default function AutoBreadcrumb({ pathname }) {
  if (!pathname) return null;

  const parts = pathname.split("/").filter(Boolean);

  const items = [
    { title: <a href="/">Home</a> },
    ...parts.map((part, i) => {
      const href = "/" + parts.slice(0, i + 1).join("/");
      const label = part
        .replace(/-/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase());
      return { title: <a href={href}>{label}</a> };
    })
  ];

  return <Breadcrumb items={items} />;
}
