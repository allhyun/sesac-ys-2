interface CommentRow{
  // idx : number,
  writer : string;
  title : string;
}

interface Props {
  comments: CommentRow;
  
  idx : number,

}

export default function CommentTr ({comments,idx}:Props) {

  return(
    <>
            <tr >
                <td>{idx + 1}</td>
                <td>{comments.title}</td>
                <td>{comments.writer}</td>
              </tr>
    </>
  )
}