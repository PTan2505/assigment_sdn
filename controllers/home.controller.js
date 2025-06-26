exports.getHomeContent = (req, res) => {
  res.json({
    blogs: [
      { title: "Ăn uống lành mạnh", content: "..." },
      { title: "Ngủ đủ giấc", content: "..." },
    ],
    documents: [{ title: "Tài liệu tiêm chủng", link: "/docs/vaccine.pdf" }],
  });
};
