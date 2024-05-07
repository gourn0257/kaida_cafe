import { mysql2 } from "@/library/db";

export default async function CommentWrite(props) {
    const board_id = props.searchParams.board_id;
    const content = props.searchParams.comment_content;
    const author_name = props.searchParams.comment_user_name;
    const author_id = props.searchParams.comment_user_id;
    const password = props.searchParams.comment_password;
    console.log('props:', props);
    try {
      // 로그인을 했는지에 따라 설정해야 될 것 같은 느낌이다
      author_id === undefined ?
        await mysql2(
          `INSERT INTO comments (board_id, content, author_name, password)
          VALUES (?, ?, ?, ?)`, 
          [board_id, content, author_name, password]
        )
      :
        await mysql2(
          `INSERT INTO comments (board_id, content, author_name, author_id, password)
          VALUES (?, ?, ?, ?, ?)`, 
          [board_id, content, author_name, author_id, password]
        );
      // res.status(201).json({ message: '글쓰기 성공!' });
    } catch (error) {
      console.log('글쓰기 오류: ', error);
      // res.status(500).json({ message: '글쓰기 실패...' });
    }
  }