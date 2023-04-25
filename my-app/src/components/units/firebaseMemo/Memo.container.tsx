import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite"
import { firebaseApp } from "../../../../pages/_app";
import { ChangeEvent, useEffect, useState } from "react";
import MemoUI from "./Memo.presenter";

export default function Memo() {
  // useEffect, when page is loaded 
  useEffect(()=> {
    void onClickView();
  }, [])

  // define states
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("")
  const [memos, setMemos] = useState<any[]>([]);

  // set Firebase
  const setMemo = (data: any) => {
    const db = getFirestore(firebaseApp);
    const memoCol = collection(db, "memo");
    void addDoc(memoCol, data)
  }

  // fetch firebase
  const getMemo = async () => {
    const memoCol = collection(getFirestore(firebaseApp), "memo");
    const result = await getDocs(memoCol);
    const datas = result.docs.map(el => (el.data()))
    return datas
  }

  // event handler
  const onClickCreate = async () => {
    if (!title) return;
    if (!contents) return;

    const inputData = {
      title,
      contents
    }
    // add data to firebase
    setMemo(inputData)

    // reload memos , 
    // 안되는데? 왜 그럴까? state reload가 한번에 되니까.
    // 그럼 어떻게 해야할까? 그냥 그 전꺼에 더해서 바꿔줌.
    setMemos((prev) => [...prev, inputData])

    // clear inputs
    setTitle("")
    setContents("")

  }

  const onClickView = async () => {
    const datas = await getMemo();
    setMemos([...datas]);
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
  }

  
  
  return (
    <MemoUI 
      onClickCreate={onClickCreate}
      onClickView={onClickView}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      memos={memos}
      title={title}
      contents={contents}
    />
  )
}