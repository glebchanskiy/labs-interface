import styles from "./Interface.module.css";

const Interface = (props) => {
  let services = [
    <option value={"lois-service-lab1"}>
      {"lois-service-lab1"}
    </option>,
    <option value={"aois-service-lab3"}>
      {"aois-service-lab3"}
    </option>,
    <option value={"test1"}>
      {"service 3"}
    </option>
  ]

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };
  
  return (
    <div>
      <h1 className="mt-4">Labs Web Interface</h1>
      <form
        onSubmit={props.onSubmit}
        className={`${styles.formContainer} p-3 border border-default rounded`}
      >
        <div className="form-group mb-3">
          <label htmlFor="label1" className="">
            Choose lab
          </label>
          <select value={props.service} onChange={props.onServiceChange} id="label1" className="form-control">
            {services}
          </select>
        </div>
        <div className="form-group my-3">
          <label htmlFor="label2" className="">
            Message
          </label>
          <div className="col">
            <input value={props.message_text} onChange={props.onMessageTextChange} id="label2" className="form-control" />
          </div>
        </div>
        <button onSubmit={onSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
      {props.answer && <div className={`${styles.formContainer} p-3 border border-default rounded my-5`}>{props.answer}</div>}
    </div>
  );
};

export default Interface;
