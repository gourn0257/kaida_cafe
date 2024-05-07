import { mysql2 } from "@/library/db";

export default async function handler(req, res) {
  console.log(req)
  if(req.method === 'POST') {
    // const { board, title, content, author_name, author_id, password } = req.body;
    const board = req.body.board;
    const title = req.body.title;
    const content = req.body.content;
    const author_name = req.body.author_name;
    const author_id = req.body.author_id;
    const password = req.body.password;
    console.log(author_id);
    try {
      // 로그인을 했는지에 따라 다르게 설정해야 될 것 같은 느낌이다
      if (author_id == null) await mysql2(
        `INSERT INTO boards (board, title, content, author_name, password)
        VALUES (?, ?, ?, ?, ?)`, 
        [board, title, content, author_name, password]
      );
      else await mysql2(
        `INSERT INTO boards (board, title, content, author_name, author_id, password)
        VALUES (?, ?, ?, (SELECT nickname FROM users WHERE id = ?), ?, ?)`, 
        [board, title, content, author_name, author_id, author_id, password]
      );
      // res.status(201).json({ message: '글쓰기 성공!' });
    } catch (error) {
      console.log('글쓰기 오류: ', error);
      // res.status(500).json({ message: '글쓰기 실패...' });
    }
  } else {
    console.log("에러!")
    // res.status(405).json({ message: 'POST 메소드만 허용됩니다.' });
  }
}