
const HomeWork = ({eachData}) => {

  return (
    <div className="bg-[#fff] shadow-[0px_4.4px_12px_-1px_rgba(222,222,222,0.3607843137)] border-[0.5px] border-[#ddd] rounded pt-[1rem] pr-[1.25rem] pb-[1rem] pl-[1.25rem]">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-[600] text-[#202C4B]">Attendance</p>
          <div>
            <select
              defaultValue="This Week"
              className="select border border-[#ddd] focusDisable"
            >
                <option value="" key="">All Subject</option>
                <option value="" key="">Physics</option>
                <option value="" key="">Chemistry</option>
                <option value="" key="">Maths</option>
            </select>
          </div>
        </div>
        
    </div>
  );
};

export default HomeWork;
