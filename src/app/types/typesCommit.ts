interface CommitComponentProps{
    sha:string
    commit:{
      committer:{
        name:string,
        date:string,
      }
      message:string

    }
}

export default CommitComponentProps