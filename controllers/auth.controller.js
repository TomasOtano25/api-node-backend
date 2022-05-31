export const register = (req, res) => {
  console.log(req.body.email);

  res.json({ ok: true });
};

export const login = (req, res) => {
  res.json({ ok: true });
};
