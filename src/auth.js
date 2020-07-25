const users = [
  { email: "kim@test.com", password: "123", name: "Kim"},
  { email: "Lee@test.com", password: "456", name: "Lee"},
  { email: "Lim@test.com", password: "789", name: "Lim"},
]

export function signIn({ email, password }) {
  const user = users.find(
      (user) => user.email === email && user.password === password
  )
  if (user === undefined) throw new Error()
  return user
}