'use client';

// const { mysql2 } = require("@/library/db");
const { useState } = require("react");
// mysql2(`UPDATE boards SET recommend = recommend + 1 WHERE id = ?`, [props.params.id])

// function Bord_recommendButton(recommend) {
//   const [board_recommend, setBoard_recommend] = useState(recommend);
//   return(
//     <button id="writing-recommend"
//       onClick={()=>{
//         setBoard_recommend(board_recommend++)
//         mysql2
//       }}>
//       {board[0].recommend}
//     </button>
//   )
// }
function Bord_recommendButton2(board_id) {
  console.log(board_id.board_id)
  const id = parseInt(board_id.board_id)
  const [board_recommend, setBoard_recommend] = useState(id);
  return(
    <button id="writing-recommend"
      onClick={()=>{
        // board_id++
        setBoard_recommend(board_recommend+1)
        // setBoard_recommend(ModifyMysql(`UPDATE boards SET recommend = recommend + 1 WHERE id = ?`, [props.params.id]))
      }}>
      {/* {board_recommend} */}
      {board_recommend}
    </button>
  )
}

export { Bord_recommendButton2 }