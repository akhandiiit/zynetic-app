import warning from '../assets/notification_important.svg';
import info from '../assets/Vector.svg';
import arrowForward from '../assets/arrow_forward.svg'
import notiIcon from '../assets/notification.svg'

const typeStyles = {
  warning: {
    icon: warning,
    wrapBg: "bg-[#3B1A1A]",        // dark red background tint
    border: "border-[#CC3A3A]",   // red outline
    text: "text-[#FF5A5A]"        // bright red text
  },
  info: {
    icon: info,
    wrapBg: "bg-[#3A2F18]",       // dark amber/orange tint
    border: "border-[#B48318]",   // amber border
    text: "text-[#FFB526]"        // bright amber text
  }
};


const NotificationsPanel = ({ notifications }) => 
  {
    const randomId = Math.floor(1000 + Math.random() * 9000);

    return(
  <div className="bg-slate-900 rounded-lg p-4 h-full">
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm flex item-center"><img className="my-auto mr-1" src={notiIcon} style={{height:"12px"}} /> Live Notifications</div>
      <div className="text-blue-400 text-sm">More ›</div>
    </div>

    <div className="space-y-3 overflow-y-auto max-h-[800px]">
      {notifications.map((n, i) => {
        const styles = typeStyles[n.type] || typeStyles.warning;
        const Icon = n.type == 'info' ? info : warning;

        return (
          <div
            key={i}
            className="bg-[#121725] rounded-xl px-4 py-3 cursor-pointer hover:bg-[#1a1f33] transition"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-slate-400">{n.time}</span>

              <div
                className={`flex items-center gap-1 ${styles.wrapBg} 
                            ${styles.border} border text-[10px] 
                            px-1 py-0.5 rounded ${styles.text}`}
              >
                <img src={Icon} alt="Add charger" style={{height:"12px", width:"13px"}} />
                <span className="tracking-wide uppercase">{randomId}</span>
              </div>
            </div>

            {/* Message + Arrow */}
            <div className="flex items-center">
              <span className="text-[13px] font-medium text-white">
                {n.message} {n.type}
              </span>

              <img src={arrowForward} className="ml-auto text-slate-400" />
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default NotificationsPanel;
