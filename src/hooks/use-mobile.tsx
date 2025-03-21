
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Hàm để cập nhật trạng thái mobile dựa trên chiều rộng cửa sổ
    const updateMobileState = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Sử dụng matchMedia API để theo dõi thay đổi breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Đặt giá trị ban đầu
    updateMobileState()
    
    // Thêm listener cho sự kiện thay đổi kích thước
    if (mql.addEventListener) {
      mql.addEventListener("change", updateMobileState)
    } else {
      // Hỗ trợ cho các trình duyệt cũ hơn
      window.addEventListener('resize', updateMobileState)
    }
    
    // Cleanup function
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", updateMobileState)
      } else {
        window.removeEventListener('resize', updateMobileState)
      }
    }
  }, [])

  return !!isMobile
}

// Add the alias for backward compatibility
export const useMediaQuery = useIsMobile;
