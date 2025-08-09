import Image from "next/image";
import { useState } from "react";
import Glass from "@/components/glassmorphism";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Dashboard", icon: "/icons/dashboard.svg", top: 151 },
  { label: "Tasks", icon: "/icons/tasks.svg", top: 201 },
  { label: "Calendar", icon: "/icons/calendar.svg", top: 251 },
  { label: "Settings", icon: "/icons/settings.svg", top: 301 },
  { label: "Support", icon: "/icons/support.svg", top: 351 },
  { label: "Performance", icon: "/icons/performance.svg", top: 455 },
  { label: "Payrolls", icon: "/icons/payrolls.svg", top: 505 },
  { label: "Invoice", icon: "/icons/invoice.svg", top: 555 },
  { label: "Employees", icon: "/icons/employees.svg", top: 605 },
  { label: "Meeting", icon: "/icons/meeting.svg", top: 655 },
];

const meetingData = [
  {
    top: 87,
    title: "Project Manager - Job Interview",
    time: "Today 03:00-05:00",
    images: ["person 2.jpeg", "person 3.jpeg", "person 4.jpeg"],
  },
  {
    top: 189.5,
    title: "Sales Update - Profit Plan",
    time: "Tomorrow 12:00-14:00",
    images: ["person 5.jpeg", "person 6.jpeg"],
  },
  {
    top: 292,
    title: "Backend Dev - Job Interview",
    time: "Aug 6 / 06:00-08:00",
    images: ["person 7.jpeg", "person 8.jpeg", "person 9.jpeg", "person 10.jpeg"],
  },
  {
    top: 394.5,
    title: "Frontend Dev - Job Interview",
    time: "Aug 9 / 02:00-04:00",
    images: ["person 7.jpeg", "person 8.jpeg", "person 9.jpeg", "person 10.jpeg"],
  },
];

const employeeData = [
  {
    id: "202302431",
    name: "Mostafa Shady",
    position: "Ai Engineer",
    progress: "89%",
  },
  {
    id: "202501701",
    name: "Elon Musk",
    position: "Product Engineer",
    progress: "69%",
  },
  {
    id: "202009438",
    name: "Mark Zucker",
    position: "Lead Specialist",
    progress: "93%",
  },
  {
    id: "202126773",
    name: "Bill Gates",
    position: "HR Manager",
    progress: "33%",
  },
  {
    id: "202259834",
    name: "Mark Ruffalo",
    position: "Accountant",
    progress: "54%",
  },
  {
    id: "201994836",
    name: "Robert Downey",
    position: "Web Developer",
    progress: "79%",
  },
];

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= meetingData.length ? 0 : nextIndex;
    });
  };

  const visibleMeetings = [
    meetingData[currentIndex % meetingData.length],
    meetingData[(currentIndex + 1) % meetingData.length],
    meetingData[(currentIndex + 2) % meetingData.length],
  ].slice(0, 3);

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover object-center"
          unoptimized
          priority
        />
      </div>

      <div className="absolute top-[20px] left-0 right-0 z-10 px-[40px]">
        <div className="flex items-center justify-between w-full">
          
          <div className="flex items-center gap-x-[145px]">
            
            <div className="w-[90px]">
              <Image
                src="/logo.png"
                alt="logo"
                width={2172}
                height={1311}
                className="w-full h-auto"
              />
            </div>

            <h1 className="text-[35px] text-[#293141]">Dashboard</h1>
          </div>

          <Glass width={208} height={60} outerRadius="19px" innerRadius="17px">
            <div className="flex items-center px-[10px] justify-between w-full h-full">
              
              <div className="w-[35px] h-[35px] bg-white rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                <Image
                  src="/person images/person 1.png"
                  alt="Profile"
                  width={35}
                  height={35}
                  className="object-cover"
                />
              </div>

              <h1 className="text-[12px] text-black mx-[10px]">Mostafa Shady</h1>

              <Image
                src="/icons/arrow down.svg"
                alt="icon"
                width={14}
                height={7}
                className="shrink-0"
              />
            </div>
          </Glass>
        </div>
      </div>

      <h2 className="absolute top-[120px] left-[67px] text-[15px] font-normal text-black/60 opacity-80">
        Main Menu
      </h2>

      <h2 className="absolute top-[425px] left-[67px] text-[15px] font-normal text-black/60 opacity-80">
        Team Management
      </h2>

      {menuItems.map((item) => (
        <div
          key={item.label}
          className="absolute left-[40px] w-[205px] h-[50px]"
          style={{ top: `${item.top}px` }}
        >
          <div
            className={`absolute top-0 left-0 h-full rounded-[12px] p-[2px] overflow-hidden transition-all duration-300 ease-in-out ${
              active === item.label
                ? "opacity-100 w-full"
                : "opacity-0 w-0"
            } bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_80%,rgba(255,255,255,1)_50%)] shadow-[0_4px_24px_-1px_rgba(255,255,255,0.15)]`}
          >
            <div className="w-full h-full rounded-[10px] bg-[linear-gradient(-90deg,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.1)_100%)] backdrop-blur-[40px]" />
          </div>
        </div>
      ))}

      {menuItems.map((item) => (
        <div
          key={item.label}
          className="absolute left-[40px] w-[193px] h-[50px] flex items-center px-[20px] cursor-pointer z-10"
          style={{ top: `${item.top}px` }}
          onClick={() => setActive(item.label)}
        >
          <Image
            src={item.icon}
            alt={`${item.label} Icon`}
            width={22}
            height={22}
            className={`shrink-0 transition-opacity duration-300 ${
              active === item.label ? "opacity-100" : "opacity-60"
            }`}
          />
          <h2
            className={`text-[13px] text-[#293141] ml-[16px] transition-opacity duration-300 ${
              active === item.label ? "opacity-100" : "opacity-60"
            }`}
          >
            {item.label}
          </h2>
        </div>
      ))}

      <div className="absolute top-[120px] left-[275px] flex gap-x-[30px]">
        
        <div className="flex flex-col gap-y-[30px]">
          <Glass width={850} height={80} outerRadius="22px" innerRadius="20px" opacityStart={0.5} opacityMiddle={0} opacityEnd={0.5}>
            <div className="flex items-center justify-between px-[30px] w-full h-full">
              
              <div className="flex items-center gap-x-[10px]">
                <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center">
                  <Image src="/icons/total employees.svg" alt="Employees" width={24} height={24} />
                </div>
                <div className="leading-[18px]">
                  <h2 className="text-[13px] text-black/60">Total Employees</h2>
                  <h6 className="text-[17px] text-[#293141]">422</h6>
                </div>
              </div>

              <div className="flex items-center gap-x-[10px]">
                <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center">
                  <Image src="/icons/total projects.svg" alt="Projects" width={28} height={28} />
                </div>
                <div className="leading-[18px]">
                  <h2 className="text-[13px] text-black/60">Total Projects</h2>
                  <h6 className="text-[17px] text-[#293141]">988</h6>
                </div>
              </div>

              <div className="flex items-center gap-x-[10px]">
                <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center">
                  <Image src="/icons/total applicants.svg" alt="Applicants" width={26} height={26} />
                </div>
                <div className="leading-[18px]">
                  <h2 className="text-[13px] text-black/60">Job Applicants</h2>
                  <h6 className="text-[17px] text-[#293141]">63</h6>
                </div>
              </div>
            </div>
          </Glass>

          <Glass width={850} height={253} outerRadius="22px" innerRadius="20px" opacityStart={0.5} opacityMiddle={0} opacityEnd={0.5}>
            <div className="pt-[20px] px-[30px] text-[#293141] w-full h-full">
              {/* Header Row */}
              <div className="flex items-center justify-between">
                {/* Title */}
                <h1 className="text-[20px]">Average KPI Score</h1>

                {/* Second Glass */}
                <Glass width={149} height={40} outerRadius="12px" innerRadius="10px">
                  <div className="flex items-center justify-between px-[15px] w-full h-full">
                    <div className="flex items-baseline text-[#293141]">
                      <h1 className="text-[12px]">Past</h1>
                      <h6 className="text-[12px] font-bold mx-1">6</h6>
                      <h1 className="text-[12px]">months</h1>
                    </div>

                    <Image
                      src="/icons/arrow down.svg"
                      alt="icon"
                      width={11}
                      height={6}
                      className="shrink-0"
                    />
                  </div>
                </Glass>
              </div>
              
              {/* Row 2: KPI left, Top Performance glass right */}
              <div className="flex items-start justify-between">
                <div>
                  <h6 className="text-[20px] text-[#293141]">64.78%</h6>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src="/icons/arrow down filled.svg"
                      alt="arrow down"
                      width={10}
                      height={6}
                      className="shrink-0"
                    />
                    <span className="text-[12px] text-black/60">2.36</span>
                  </div>
                </div>

                <div className="mt-[10px]">
                  <Glass width={250} height={160} outerRadius="12px" innerRadius="10px">
                    <div className="pl-[20px] pt-[10px] h-full pr-[10px] pb-[10px] flex flex-col">
                      
                      <h1 className="text-[16px] text-[#293141] shrink-0">Top Performance</h1>

                      <div className="mt-[10px] flex-1 overflow-y-auto no-scrollbar pr-[2px]">
                        {/* 1 */}
                        <div className="flex items-center gap-[10px]">
                          <div className="relative shrink-0">
                            <div className="w-[36px] h-[36px] bg-white rounded-full overflow-hidden flex items-center justify-center">
                              <Image
                                src="/person images/person 2.jpeg"
                                alt="Bill Gates"
                                width={36}
                                height={36}
                                className="object-cover"
                              />
                            </div>
                            <div className="absolute top-[0px] -right-[5px] w-[16px] h-[16px] rounded-full bg-[#293141] text-white text-[8px] border-2 border-white flex items-center justify-center">
                              <h6 className="relative left-[0.3px]">1</h6>
                            </div>
                          </div>
                          <div className="min-w-0">
                            <h2 className="text-[12px] text-[#293141] font-medium truncate">Bill Gates</h2>
                            <h6 className="text-[10px] text-black/60 leading-[13px]">112 tasks completed</h6>
                          </div>
                        </div>

                        {/* 2 */}
                        <div className="flex items-center gap-[10px] mt-[10px]">
                          <div className="relative shrink-0">
                            <div className="w-[36px] h-[36px] bg-white rounded-full overflow-hidden flex items-center justify-center">
                              <Image
                                src="/person images/person 5.jpeg"
                                alt="Roland Busch"
                                width={36}
                                height={36}
                                className="object-cover"
                              />
                            </div>
                            <div className="absolute top-[0px] -right-[5px] w-[16px] h-[16px] rounded-full bg-[#293141] text-white text-[8px] border-2 border-white flex items-center justify-center">
                              <h6 className="relative left-[0.4px] top-[0.3px]">2</h6>
                            </div>
                          </div>
                          <div className="min-w-0">
                            <h2 className="text-[12px] text-[#293141] font-medium truncate">Roland Busch</h2>
                            <h6 className="text-[10px] text-black/60 leading-[13px]">109 tasks completed</h6>
                          </div>
                        </div>

                        {/* 3 */}
                        <div className="flex items-center gap-[10px] mt-[10px]">
                          <div className="relative shrink-0">
                            <div className="w-[36px] h-[36px] bg-white rounded-full overflow-hidden flex items-center justify-center">
                              <Image
                                src="/person images/person 6.jpeg"
                                alt="Arvind Krishna"
                                width={36}
                                height={36}
                                className="object-cover"
                              />
                            </div>
                            <div className="absolute top-[0px] -right-[5px] w-[16px] h-[16px] rounded-full bg-[#293141] text-white text-[8px] border-2 border-white flex items-center justify-center">
                              <h6 className="relative left-[0.4px] top-[0.2px]">3</h6>
                            </div>
                          </div>
                          <div className="min-w-0">
                            <h2 className="text-[12px] text-[#293141] font-medium truncate">Arvind Krishna</h2>
                            <h6 className="text-[10px] text-black/60 leading-[13px]">103 tasks completed</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Glass>
                </div>
              </div>
            </div>
          </Glass>

          <Glass width={850} height={191} outerRadius="22px" innerRadius="20px" opacityStart={0.5} opacityMiddle={0} opacityEnd={0.5}>
            <div className="pt-[20px] pl-[30px] text-[#293141] w-full h-full overflow-y-scroll no-scrollbar">
              {/* Title */}
              <h1 className="text-[20px] mb-[15px]">Employees</h1>

              {/* Headers */}
              <div className="flex text-[13px] text-black/60 mb-[12px]">
                <h2 className="w-[155px]">ID</h2>
                <h2 className="w-[175px]">Name</h2>
                <h2 className="w-[215px]">Position</h2>
                <h2 className="w-[235px]">Performance</h2>
              </div>

              {employeeData.map((emp, index) => (
                <div key={index} className="flex items-center text-[13px] text-[#293141] mb-[10px]">
                  <h6 className="w-[155px]">{emp.id}</h6>
                  <h2 className="w-[175px]">{emp.name}</h2>
                  <h2 className="w-[215px]">{emp.position}</h2>
                  <div className="flex items-center">
                    <div className="w-[78px] h-[8px] rounded-full bg-[#D9D9D9] relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#A4B1C3]/80 to-[#3D4759]"
                        style={{ width: emp.progress }}
                      />
                    </div>
                    <Image
                      src="/icons/dots.svg"
                      alt="More"
                      width={16}
                      height={4}
                      className="ml-[90px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Glass>
        </div>

        <div>
          <div className="relative w-[340px] h-[330px] rounded-[22px] overflow-hidden shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15)]">

            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[300px] h-[200px] pointer-events-none z-2 blur-[60px] bg-[radial-gradient(circle,#17A9E1_0%,rgba(23,169,225,0)_100%)]" />

            <div className="absolute top-[-120px] right-[-120px] w-[200px] h-[200px] pointer-events-none z-1 blur-[80px] opacity-20 bg-[radial-gradient(circle,#FFFFFF_0%,rgba(255,255,255,0)_100%)]" />

            <div className="w-full h-full rounded-[20px] bg-black relative">
              <h1 className="absolute top-[30px] left-[30px] text-[20px] text-white z-3">
                Upcoming Meetings
              </h1>

              <div className="absolute top-[87px] left-[33px] w-px h-[205px] bg-white" />

              {meetingData.map((meeting, index) => (
                <div
                  key={index}
                  className="absolute left-[28px] w-[10px] h-[10px] rounded-full bg-white"
                  style={{ top: `${meeting.top}px` }}
                />
              ))}

              <AnimatePresence mode="wait">
                {visibleMeetings.map((meeting, index) => {
                  const targetPositions = [87, 189.5, 292];
                  const targetTop = targetPositions[index];
                  
                  return (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        top: targetTop 
                      }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-[50px]"
                      style={{ top: `${targetTop}px` }}
                    >
                      <h2 className="text-white text-[11px] leading-[10px]">{meeting.title}</h2>
                      <h6 className="text-[#9C9A9E] text-[10px] mt-[2px]">{meeting.time}</h6>
                      <div className="mt-[10px] flex items-center">
                        {meeting.images.map((img, i) => (
                          <div
                            key={i}
                            className={`w-[34px] h-[34px] bg-white rounded-full overflow-hidden flex items-center justify-center ${
                              i !== 0 ? "-ml-[4px]" : ""
                            }`}
                          >
                            <Image
                              src={`/person images/${img}`}
                              alt="Profile"
                              width={34}
                              height={34}
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 w-full h-[40px] rounded-b-[20px] bg-gradient-to-t from-black to-transparent pointer-events-none z-2" />
              <div className="absolute right-[20px] bottom-[20px] flex flex-col items-center gap-2 z-50">
                <motion.div 
                  whileTap={{ y: 2 }}
                  onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : meetingData.length - 1)}
                  className="cursor-pointer rotate-180"
                >
                  <Image
                    src="/icons/arrow down white.svg"
                    alt="Down arrow"
                    width={14}
                    height={7}
                    className="shrink-0"
                  />
                </motion.div>
                
                <motion.div 
                  whileTap={{ y: -2 }}
                  onClick={goToNext}
                  className="cursor-pointer"
                >
                  <Image
                    src="/icons/arrow down white.svg"
                    alt="Up arrow"
                    width={14}
                    height={7}
                    className="shrink-0"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <h1 className="pt-[20px] text-[#293141] text-[20px] font-medium">
            Workplace module
          </h1>

          <div className="pt-[14px] flex flex-col gap-y-[10px]">
            <div className="flex items-center gap-x-[15px]">
              <div className="text-[#293141] text-[13px] leading-[16px] w-[60px]">
                <h2 className="text-black/60">Remote</h2>
                <h6 className="text-[15px] text-[#293141]">76</h6>
              </div>
              <div className="relative w-[235px] h-[57px] rounded-[12px] p-[2px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_80%,rgba(255,255,255,1)_50%)] shadow-[0_4px_24px_-1px_rgba(255,255,255,0.15)]">
                <div className="w-full h-full rounded-[10px] bg-[linear-gradient(-90deg,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.1)_100%)] backdrop-blur-[40px] flex items-center justify-end px-[20px]">
                  <h6 className="text-[#293141] text-[16px] font-semibold">14.29%</h6>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-[15px]">
              <div className="text-[#293141] text-[13px] leading-[16px] w-[60px]">
                <h2 className="text-black/60">Hybrid</h2>
                <h6 className="text-[15px] text-[#293141]">92</h6>
              </div>
              <div className="relative w-[235px] h-[57px] rounded-[12px] p-[2px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_80%,rgba(255,255,255,1)_50%)] shadow-[0_4px_24px_-1px_rgba(255,255,255,0.15)]">
                <div className="w-full h-full rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_50%,#DFDFDF_100%)] backdrop-blur-[40px] flex items-center justify-end px-[20px]">
                  <h6 className="text-[#293141] text-[16px] font-semibold">28.57%</h6>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-[15px]">
              <div className="text-[#293141] text-[13px] leading-[16px] w-[60px]">
                <h2 className="text-black/60">On-site</h2>
                <h6 className="text-[15px] text-[#293141]">254</h6>
              </div>
              <div className="relative w-[235px] h-[57px] rounded-[12px] p-[2px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_80%,rgba(255,255,255,1)_50%)] shadow-[0_4px_24px_-1px_rgba(255,255,255,0.15)]">
                <div className="w-full h-full rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_50%,rgba(111,114,118,0.3)_95%,rgba(111,114,118,0.3)_100%)] backdrop-blur-[40px] flex items-center justify-end px-[20px]">
                  <h6 className="text-[#293141] text-[16px] font-semibold">57.14%</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
