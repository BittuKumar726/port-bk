function ResumeContent(props: any) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      {props?.isProject ? (
        <>
          {props.content.map((value: any, index: number) => (
            <div key={index}>
              <b>{value?.projectName}</b>
              <ul>
                {value.desc.map((item: any, idx: number) => (
                  <li key={idx}> ‣{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ) : (
        <ul>
          {props.content.map((value: any, index: number) => (
            <li key={index}> ‣{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResumeContent;
