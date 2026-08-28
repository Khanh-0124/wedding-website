(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7182],
  {
    32426: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ii: () => d,
        M9: () => h,
        Q$: () => s,
        T6: () => m,
        U1: () => r,
        W9: () => g,
        nC: () => p,
        nR: () => l,
        t: () => n,
        ud: () => u,
        w: () => o,
        xG: () => c,
        xK: () => i,
        ym: () => x,
      });
      let n = (e, t) => e[t],
        i = {
          title: {
            vi: "Đ\xf4i N\xe9t Về Ch\xfang T\xf4i",
            en: "About Us",
            ko: "소개",
          },
          father: { vi: "Con \xd4ng", en: "Child of Mr.", ko: "아들" },
          mother: { vi: "v\xe0 B\xe0", en: "and Mrs.", ko: "그리고" },
          motherOnly: { vi: "Con B\xe0", en: "Child of Mrs.", ko: "어머니" },
          role: {
            groom: { vi: "Ch\xfa rể", en: "Groom", ko: "신랑" },
            bride: { vi: "C\xf4 d\xe2u", en: "Bride", ko: "신부" },
          },
          coupleSide: {
            groom: {
              vi: "Ch\xfa Rể & C\xf4 D\xe2u",
              en: "Groom & Bride",
              ko: "신랑 & 신부",
            },
            bride: {
              vi: "C\xf4 D\xe2u & Ch\xfa Rể",
              en: "Bride & Groom",
              ko: "신부 & 신랑",
            },
          },
        },
        s = {
          schedule: { vi: "Lịch tr\xecnh", en: "Schedule", ko: "일정" },
          specialDay: {
            vi: "Ng\xe0y Trọng Đại",
            en: "Wedding Day",
            ko: "Save the day",
          },
          directions: { vi: "Chỉ đường", en: "Directions", ko: "길찾기" },
          dressCode: {
            vi: "M\xe0u Trang Phục",
            en: "DRESS CODE",
            ko: "드레스 코드",
          },
        },
        l = {
          title: { vi: "Album Ảnh Cưới", en: "Wedding Album", ko: "웨딩 앨범" },
          viewMore: { vi: "Xem tất cả", en: "VIEW ALL", ko: "모두 보기" },
        },
        r = {
          title: {
            vi: "Những Lời Ch\xfac Tốt Đẹp",
            en: "Best Wishes",
            ko: "축하 메시지",
          },
          subtitle: { vi: "Lời ch\xfac", en: "Wishes", ko: "축하 메시지" },
          viewAll: { vi: "XEM TẤT CẢ", en: "VIEW ALL", ko: "모두 보기" },
          sendWish: {
            vi: "Gửi lời ch\xfac cho c\xf4 d\xe2u ch\xfa rể",
            en: "Send wishes to the couple",
            ko: "신랑 신부에게 축하 메시지 보내기",
          },
          loading: {
            vi: "Đang tải...",
            en: "Loading...",
            ko: "불러오는 중...",
          },
          total: {
            vi: (e) =>
              "Tổng cộng ".concat(
                e,
                " lời ch\xfac • Cuộn xuống để xem th\xeam",
              ),
            en: (e) => "Total ".concat(e, " wishes • Scroll to see more"),
            ko: (e) => "총 ".concat(e, "개 메시지 • 스크롤하여 더 보기"),
          },
        },
        o = {
          fields: {
            message: { vi: "Lời ch\xfac", en: "Message", ko: "축하 메시지" },
            name: { vi: "T\xean của bạn", en: "Your name", ko: "이름" },
            invitedBy: {
              vi: "Bạn l\xe0 kh\xe1ch mời của ai?",
              en: "Who invited you?",
              ko: "누구의 초대인가요?",
            },
            attending: {
              vi: "Bạn c\xf3 thể tham dự kh\xf4ng?",
              en: "Will you attend?",
              ko: "참석 여부",
            },
            guests: {
              vi: "Số người tham dự",
              en: "Number of guests",
              ko: "참석 인원",
            },
          },
          title: {
            vi: "Nhắn Gửi Y\xeau Thương",
            en: "Send Your Love",
            ko: "축하 메시지 보내기",
          },
          subtitle: {
            vi: "Mỗi lời ch\xfac của Qu\xfd kh\xe1ch đều l\xe0 niềm hạnh ph\xfac cho gia đ\xecnh ch\xfang t\xf4i.",
            en: "Every wish means a lot to our family.",
            ko: "모든 축하 메시지가 소중합니다!",
          },
          headerTop: {
            vi: "Gửi Lời Ch\xfac & X\xe1c nhận tham dự",
            en: "Send Wishes & RSVP",
            ko: "축하 메시지 & 참석 여부",
          },
          messageLabel: { vi: "Lời Ch\xfac", en: "Your Message", ko: "메시지" },
          messagePlaceholder: {
            vi: "Viết v\xe0i lời ch\xfac thật dễ thương cho c\xf4 d\xe2u, ch\xfa rể...",
            en: "Write a sweet message for the bride and groom...",
            ko: "신랑 신부에게 따뜻한 메시지를 남겨주세요...",
          },
          invitedBy: {
            vi: "Bạn l\xe0 kh\xe1ch mời của ai?",
            en: "Who invited you?",
            ko: "누구의 초대를 받으셨나요?",
          },
          name: { vi: "T\xean của bạn", en: "Your Name", ko: "이름" },
          nickname: { vi: "Biệt danh", en: "Nickname", ko: "별명" },
          attending: {
            placeholder: {
              vi: "-- Chọn c\xe2u trả lời --",
              en: "-- Select an option --",
              ko: "-- 선택해주세요 --",
            },
            label: {
              vi: "Bạn c\xf3 thể tham dự kh\xf4ng?",
              en: "Will you attend?",
              ko: "참석 가능하신가요?",
            },
            options: {
              yes: {
                vi: "✨ Chắc chắn rồi, m\xecnh sẽ đến",
                en: "✨ Yes, I will attend",
                ko: "✨ 꼭 참석합니다",
              },
              maybe: {
                vi: "\uD83E\uDD0D M\xecnh sẽ cố gắng sắp xếp",
                en: "\uD83E\uDD0D Maybe, I will try",
                ko: "\uD83E\uDD0D 가능하면 참석할게요",
              },
              no: {
                vi: "\uD83D\uDC8C Rất tiếc m\xecnh kh\xf4ng thể tham dự",
                en: "\uD83D\uDC8C Sorry, I can’t attend",
                ko: "\uD83D\uDC8C 참석하지 못합니다",
              },
            },
          },
          alerts: {
            required: {
              vi: "Vui l\xf2ng điền đầy đủ th\xf4ng tin sau để gửi lời ch\xfac nh\xe9:",
              en: "Please complete all required fields before sending your wishes:",
              ko: "축하 메시지를 보내기 전에 다음 정보를 모두 입력해주세요:",
            },
          },
          placeholders: {
            name: { vi: "Nguyễn Văn Huy", en: "John Smith", ko: "홍길동" },
            nickname: {
              vi: "VD: Bạn cấp 3 của c\xf4 d\xe2u, Bạn đồng nghiệp của ch\xfa rể ...",
              en: "Ex: Bride's high school friend, Groom's colleague...",
              ko: "예: 신부의 고등학교 친구, 신랑의 직장 동료...",
            },
          },
          guests: {
            label: {
              vi: "Số người tham dự",
              en: "Number of guests",
              ko: "참석자",
            },
            placeholder: {
              vi: "-- Số người --",
              en: "-- Select guests --",
              ko: "-- 인원 선택 --",
            },
          },
          submit: {
            sending: { vi: "ĐANG GỬI...", en: "SENDING...", ko: "전송 중..." },
            send: {
              vi: "GỬI LỜI CH\xdaC",
              en: "SEND MESSAGE",
              ko: "메시지 보내기",
            },
          },
          optionsNumber: {
            one: { vi: "1 người", en: "1 guest", ko: "1명" },
            two: { vi: "2 người", en: "2 guests", ko: "2명" },
            three: { vi: "3 người", en: "3 guests", ko: "3명" },
            four: { vi: "4 người", en: "4 guests", ko: "4명" },
            fivePlus: { vi: "5+ người", en: "5+ guests", ko: "5명 이상" },
          },
          success: {
            title: {
              vi: "Cảm ơn bạn rất nhiều",
              en: "Thank you so much",
              ko: "감사합니다",
            },
            desc: {
              vi: "Lời ch\xfac của bạn l\xe0 niềm hạnh ph\xfac của ch\xfang t\xf4i.",
              en: "Your wish means a lot to us.",
              ko: "당신의 메시지는 큰 행복입니다.",
            },
            viewWishes: {
              vi: "Xem những lời ch\xfac đ\xe3 gửi",
              en: "View all wishes",
              ko: "모든 메시지 보기",
            },
          },
          validation: {
            message: {
              vi: "Bạn viết v\xe0i lời ch\xfac cho c\xf4 d\xe2u v\xe0 ch\xfa rể",
              en: "Please write a message for the bride and groom",
              ko: "신랑 신부에게 축하 메시지를 남겨주세요",
            },
            name: {
              vi: "Vui l\xf2ng điền t\xean của bạn nh\xe9",
              en: "Please enter your name",
              ko: "이름을 입력해주세요",
            },
            nickname: {
              vi: "Bạn nhập gi\xfap tụi m\xecnh biệt danh nh\xe9",
              en: "Please enter your nickname",
              ko: "별명을 입력해주세요",
            },
            attending: {
              vi: "Bạn cho tụi m\xecnh biết bạn c\xf3 thể tham dự kh\xf4ng nh\xe9",
              en: "Please let us know if you can attend",
              ko: "참석 여부를 알려주세요",
            },
          },
          thankYou: {
            yes: {
              vi: "Lời ch\xfac của Qu\xfd kh\xe1ch l\xe0 niềm hạnh ph\xfac của gia đ\xecnh ch\xfang t\xf4i. Hẹn gặp Qu\xfd kh\xe1ch trong ng\xe0y đặc biệt!",
              en: "Your wishes mean so much to our family. We look forward to celebrating this special day with you!",
              ko: "축하 메시지에 진심으로 감사드립니다. 특별한 날에 꼭 뵙기를 기대합니다!",
            },
            maybe: {
              vi: "Gia đ\xecnh ch\xfang t\xf4i đ\xe3 nhận được lời ch\xfac của Qu\xfd kh\xe1ch. Hy vọng sẽ được gặp Qu\xfd kh\xe1ch trong ng\xe0y trọng đại!",
              en: "Thank you for your wishes. We hope to see you on our special day!",
              ko: "축하 메시지 감사합니다. 소중한 날에 함께할 수 있기를 바랍니다!",
            },
            no: {
              vi: "D\xf9 Qu\xfd kh\xe1ch kh\xf4ng thể tham dự, lời ch\xfac của Qu\xfd kh\xe1ch vẫn l\xe0 m\xf3n qu\xe0 tinh thần v\xf4 c\xf9ng \xfd nghĩa đối với gia đ\xecnh ch\xfang t\xf4i.",
              en: "Even if you can't attend, your wishes are a precious gift to us.",
              ko: "참석하지 못하시더라도 보내주신 축하의 마음은 큰 선물입니다.",
            },
          },
          people: {
            groom: { vi: "Ch\xfa rể", en: "Groom", ko: "신랑" },
            bride: { vi: "C\xf4 d\xe2u", en: "Bride", ko: "신부" },
            both: { vi: "Cả hai", en: "Both", ko: "둘 다" },
          },
        },
        c = {
          title: {
            vi: "Tr\xe2n trọng k\xednh mời",
            en: "CORDIALLY INVITED",
            ko: "진심으로 초대합니다",
          },
        },
        d = {
          title: {
            vi: "Đếm Ngược Đến Ng\xe0y Cưới",
            en: "Countdown to Our Wedding",
            ko: "COUNTDOWN",
          },
          labels: {
            days: { vi: "Ng\xe0y", en: "Days", ko: "일" },
            hours: { vi: "Giờ", en: "Hours", ko: "시간" },
            minutes: { vi: "Ph\xfat", en: "Minutes", ko: "분" },
            seconds: { vi: "Gi\xe2y", en: "Seconds", ko: "초" },
          },
        },
        m = {
          story: { vi: "C\xe2u chuyện", en: "Story", ko: "우리 이야기" },
          timeline: { vi: "Lịch tr\xecnh", en: "Timeline", ko: "일정" },
          gallery: { vi: "Album", en: "Gallery", ko: "갤러리" },
          wishes: { vi: "Gửi lời ch\xfac", en: "Wishes", ko: "축하 메시지" },
        },
        u = {
          playing: {
            vi: "Đang ph\xe1t nhạc \uD83C\uDFB5",
            en: "Playing music \uD83C\uDFB5",
            ko: "음악 재생 중 \uD83C\uDFB5",
          },
          idle: {
            vi: "Bật nhạc \uD83C\uDFB6",
            en: "Turn on music \uD83C\uDFB6",
            ko: "음악 켜기 \uD83C\uDFB6",
          },
          wishes: {
            vi: "Gửi lời ch\xfac \uD83D\uDC8C",
            en: "Send wishes \uD83D\uDC8C",
            ko: "축하 메시지 보내기 \uD83D\uDC8C",
          },
        },
        x = {
          subtitle: {
            vi: "C\xe2u chuyện của ch\xfang t\xf4i",
            en: "Our Story",
            ko: "우리의 이야기",
          },
          title: {
            vi: "H\xe0nh Tr\xecnh T\xecnh Y\xeau",
            en: "Our Love Story",
            ko: "forever begins",
          },
        },
        h = {
          subtitle: { vi: "Lịch tr\xecnh", en: "Schedule", ko: "일정" },
          title: {
            vi: "Timeline sự kiện cưới",
            en: "Wedding Timeline",
            ko: "결혼식 일정",
          },
        },
        p = {
          subtitle: {
            vi: "Mừng cưới",
            en: "Wedding Gift",
            ko: "마음 전하실 곳",
          },
          title: { vi: "Hộp Mừng Cưới", en: "Wedding Gift Box", ko: "안내" },
          bride: { vi: "C\xf4 d\xe2u", en: "Bride", ko: "신부" },
          groom: { vi: "Ch\xfa rể", en: "Groom", ko: "신랑" },
          accountNumber: {
            vi: "Số t\xe0i khoản",
            en: "Account Number",
            ko: "계좌번호",
          },
          accountHolder: {
            vi: "Chủ t\xe0i khoản",
            en: "Account Holder",
            ko: "예금주",
          },
          viewQr: {
            vi: "\uD83D\uDC49 Bấm để xem m\xe3 QR",
            en: "\uD83D\uDC49 Tap to view QR code",
            ko: "\uD83D\uDC49 QR 코드를 보려면 눌러주세요",
          },
          scanQr: {
            vi: "Qu\xe9t m\xe3 để mừng cưới",
            en: "Scan the QR code to send your gift",
            ko: "축의금을 보내시려면 QR 코드를 스캔하세요",
          },
          back: {
            vi: "\uD83D\uDC49 Bấm để quay lại",
            en: "\uD83D\uDC49 Tap to go back",
            ko: "\uD83D\uDC49 돌아가려면 눌러주세요",
          },
          footer: {
            vi: "Cảm ơn Qu\xfd kh\xe1ch đ\xe3 y\xeau thương v\xe0 ch\xfac ph\xfac cho gia đ\xecnh ch\xfang t\xf4i",
            en: "Thank you for your love and blessings.",
            ko: "축복과 따뜻한 마음에 진심으로 감사드립니다.",
          },
        },
        g = {
          title: {
            vi: "Lời Nhắn Gửi",
            en: "A Message From Us",
            ko: "저희의 마음을 전합니다",
          },
          description: {
            vi: "Ch\xfang t\xf4i muốn gửi đến c\xe1c bạn những lời y\xeau thương v\xe0 cảm ơn ch\xe2n th\xe0nh nhất. Xin h\xe3y c\xf9ng xem video n\xe0y để hiểu th\xeam về h\xe0nh tr\xecnh t\xecnh y\xeau của ch\xfang t\xf4i.",
            en: "We would love to share our heartfelt gratitude and a few words from the bottom of our hearts. We hope this video gives you a glimpse into our journey together.",
            ko: "저희의 진심 어린 감사와 사랑의 마음을 전합니다. 이 영상을 통해 저희의 사랑 이야기를 함께해 주세요.",
          },
          loading: {
            vi: "Đang tải video...",
            en: "Loading video...",
            ko: "영상을 불러오는 중...",
          },
          quote: {
            vi: "T\xecnh y\xeau kh\xf4ng phải l\xe0 nh\xecn nhau, m\xe0 l\xe0 c\xf9ng nhau nh\xecn về một hướng",
            en: "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
            ko: "사랑은 서로를 바라보는 것이 아니라 같은 방향을 함께 바라보는 것입니다.",
          },
        };
    },
    50855: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 63472));
    },
    63472: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => aR });
      var n = a(95155),
        i = a(12115),
        s = a(20063),
        l = a(75563),
        r = a(26497),
        o = a(39248),
        c = a.n(o),
        d = a(32426),
        m = a(15239),
        u = a(58029),
        x = a.n(u),
        h = a(3325),
        p = a.n(h);
      function g(e) {
        let {
            open: t,
            onOpen: a,
            guestName: i,
            weddingDate: s,
            brideName: o,
            groomName: c,
            image:
              d = "https://res.cloudinary.com/djrwanubz/image/upload/v1786014236/ChatGPT_Image_Aug_6_2026_06_03_43_PM_zr1qbf.png",
            firstEvent: u,
            secondEvent: h,
          } = e,
          g = ((e, t, a) => {
            let n = e || a;
            if (!n) return { day: "", month: "", year: "" };
            let i = (e) => {
                let [t, a, n] = e.split(/[./-]/);
                return {
                  day: t.padStart(2, "0"),
                  month: a.padStart(2, "0"),
                  year: n.slice(-2),
                };
              },
              s = i(n);
            if (!t) return s;
            let l = i(t);
            return {
              day:
                s.day === l.day
                  ? s.day
                  : (s.month === l.month && s.year === l.year,
                    "".concat(s.day, "-").concat(l.day)),
              month:
                s.month === l.month
                  ? s.month
                  : "".concat(s.month, "-").concat(l.month),
              year:
                s.year === l.year
                  ? s.year
                  : "".concat(s.year, "-").concat(l.year),
            };
          })(u, h, s);
        return (0, n.jsx)(r.N, {
          children:
            t &&
            (0, n.jsxs)(l.P.button, {
              type: "button",
              onClick: a,
              className:
                "absolute inset-0 z-50 overflow-hidden    md:w-[390px] lg:w-[430px] m-auto ",
              initial: { opacity: 1 },
              exit: { opacity: 0, scale: 1.02 },
              transition: { duration: 0.6 },
              children: [
                (0, n.jsx)(m.default, {
                  src: d,
                  alt: "Wedding Invitation",
                  fill: !0,
                  priority: !0,
                  sizes: "100vw",
                  className: "object-cover select-none cursor-pointer",
                }),
                (0, n.jsxs)("div", {
                  className: "".concat(
                    p().className,
                    "\n  absolute\n  top-[7%]\n  -translate-x-1/2\n  text-center\n  text-[#7A4A3C]\n  left-[94px]\n  leading-none",
                  ),
                  children: [
                    (0, n.jsx)("p", {
                      className: "text-[1.8rem]",
                      children: o,
                    }),
                    (0, n.jsx)("p", {
                      className: "text-[1.4rem] my-1 opacity: .8",
                      children: "&",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-[1.8rem]",
                      children: c,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    " absolute left-0 top-[72%] w-2/3 flex flex-col items-center justify-center text-center ",
                  children: [
                    (0, n.jsx)("p", {
                      className:
                        " uppercase tracking-[0.35em] text-[10px] text-[#9B6A5B] ",
                      children: "TR\xc2N TRỌNG K\xcdNH MỜI",
                    }),
                    (0, n.jsx)("p", {
                      className:
                        " mt-2 text-[18px] text-[#6E4337] px-2 break-words ",
                      children: i,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "\n    ".concat(
                    x().className,
                    "\n    absolute\n    right-[18px]\n    top-[13%]\n    -translate-y-1/2\n    flex\n    flex-col\n    items-center\n    leading-[1.0]\n    text-[#B88989]\n    select-none\n  ",
                  ),
                  children: [
                    (0, n.jsx)("p", {
                      className: "text-[40px] font-light tracking-[0.09em]",
                      children: g.day,
                    }),
                    (0, n.jsx)("p", {
                      className: "text-[40px] font-light tracking-[0.09em]",
                      children: g.month,
                    }),
                    (0, n.jsx)("p", {
                      className: "text-[40px] font-light tracking-[0.09em]",
                      children: g.year,
                    }),
                  ],
                }),
              ],
            }),
        });
      }
      let v = {
          classic: {
            envelope:
              "https://res.cloudinary.com/djrwanubz/image/upload/v1786013527/ChatGPT_Image_Aug_6_2026_05_51_22_PM_powtpx.png",
          },
          green: {
            envelope:
              "https://res.cloudinary.com/djrwanubz/image/upload/v1786014123/ChatGPT_Image_Aug_6_2026_06_01_49_PM_sbwzty.png",
          },
          red: {
            envelope:
              "https://res.cloudinary.com/djrwanubz/image/upload/v1786014236/ChatGPT_Image_Aug_6_2026_06_03_43_PM_zr1qbf.png",
          },
          blue: {
            envelope:
              "https://res.cloudinary.com/djrwanubz/image/upload/v1786014094/ChatGPT_Image_Aug_6_2026_06_01_17_PM_fdns6m.png",
          },
          pink: {
            envelope:
              "https://res.cloudinary.com/djrwanubz/image/upload/v1785944217/ChatGPT_Image_Aug_5_2026_10_36_48_PM_wbjzd8.png",
          },
        },
        f = {
          classic: {
            envelope:
              "https://pub-4ee034abad814cf5b2219f594c28724f.r2.dev/envelop/Screenshot_2026-05-14_194831_mqb3b6.png",
          },
          green: {
            envelope:
              "https://pub-4ee034abad814cf5b2219f594c28724f.r2.dev/envelop/Screenshot_2026-05-16_095204_pw8jbt.png",
          },
          red: {
            envelope:
              "https://pub-4ee034abad814cf5b2219f594c28724f.r2.dev/envelop/Screenshot_2026-05-06_103134_vij0zr.png",
          },
          blue: {
            envelope:
              "https://pub-4ee034abad814cf5b2219f594c28724f.r2.dev/envelop/Screenshot_2026-05-06_114735_cjwytc.png",
          },
          pink: {
            envelope:
              "https://pub-4ee034abad814cf5b2219f594c28724f.r2.dev/envelop/Screenshot_2026-06-01_121047_g2krcf.png",
          },
        },
        b = (e) => {
          let { color: t } = e;
          return (0, n.jsx)(l.P.div, {
            className:
              "absolute top-[72%] left-[calc(50%+28px)] md:left-[calc(50%+35px)] -translate-y-1/2 z-30 pointer-events-none",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1, duration: 0.4 },
            children: (0, n.jsxs)(l.P.svg, {
              viewBox: "0 0 36 36",
              className: "w-7 h-7 md:w-9 md:h-9",
              animate: { x: [0, -3, 0], y: [0, -2, 0] },
              transition: {
                duration: 0.7,
                repeat: 1 / 0,
                repeatDelay: 0.4,
                ease: "easeInOut",
              },
              children: [
                (0, n.jsx)("path", {
                  d: "M13 10V24L9.5 20.5C8.5 19.5 7 19.5 6 20.5C5 21.5 5 23 6 24L11 30C12 31.5 14 33 17 33H22C26.5 33 30 29.5 30 25V17C30 15.5 28.5 14 27 14C26.3 14 25.7 14.3 25.2 14.7C25.1 13.2 23.7 12 22 12C21.2 12 20.5 12.3 20 12.8C19.5 11.8 18.3 11 17 11C16.2 11 15.5 11.3 15 11.8V10C15 8.5 13.5 7 12 7C10.5 7 9 8.5 9 10V16",
                  fill: "none",
                  stroke: t,
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  opacity: "0.85",
                }),
                (0, n.jsx)("path", {
                  d: "M13 10V20",
                  stroke: t,
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  opacity: "0.85",
                }),
              ],
            }),
          });
        },
        j = (e) => (e ? e.trim().split(" ").slice(-2).join(" ") : "");
      function y(e) {
        var t, a;
        let {
            guestName: s,
            onOpen: o,
            weddingDate: m,
            brideName: u,
            groomName: x,
            theme: h,
            side: p,
            slug: y,
            lunarDate: N,
            groomWeddingDate: w,
            brideWeddingDate: k,
            groomShortName: C,
            brideShortName: T,
            weddingId: P,
            lang: S = "vi",
            cover: I,
          } = e,
          z = "0ac084a9-4b4d-47e0-a280-ca95998d4300" === P,
          D = (null == T ? void 0 : T.trim()) || j(u) || u,
          V = (null == C ? void 0 : C.trim()) || j(x) || x,
          [_, A] = (0, i.useState)(!1),
          E =
            { "moss-green": "green", burgundy: "red" }[h] ||
            (null != h ? h : "classic"),
          L = null == (t = f[E]) ? void 0 : t.envelope,
          M = null == (a = v[E]) ? void 0 : a.envelope,
          H = () => {
            _ ||
              (A(!0),
              setTimeout(() => {
                o();
              }, 1200));
          },
          B = (e) => {
            let [t, a, n] = e.split(/[./-]/);
            return new Date(+n, a - 1, +t);
          },
          q =
            w && k && B(w) <= B(k)
              ? { label: "Nh\xe0 G\xe1i", date: w }
              : { label: "Nh\xe0 Trai", date: k },
          F =
            w && k && B(w) <= B(k)
              ? { label: "Nh\xe0 Trai", date: k }
              : { label: "Nh\xe0 G\xe1i", date: w };
        return "cover-2" !== I || _
          ? (0, n.jsx)(r.N, {
              children: _
                ? (0, n.jsx)(l.P.div, {
                    className:
                      "fixed inset-0 z-50 flex items-center justify-center bg-bg-background",
                    initial: { opacity: 1 },
                    animate: { opacity: 0 },
                    transition: { duration: 1, delay: 0.3 },
                    children: (0, n.jsx)(l.P.div, {
                      className: "relative",
                      initial: { scale: 1 },
                      animate: { scale: 1.3, y: -50 },
                      transition: { duration: 0.8, ease: "easeOut" },
                      children: (0, n.jsx)("div", {
                        className:
                          "relative w-[280px] h-[180px] md:w-[340px] md:h-[220px]",
                        style: {
                          background:
                            "linear-gradient(180deg, var(--envelope1) 0%, var(--envelope2) 100%)",
                          border: "1px solid rgba(180, 165, 150, 0.3)",
                        },
                        children: (0, n.jsx)(l.P.div, {
                          className:
                            "absolute -top-[1px] left-0 right-0 h-[90px] md:h-[110px] origin-top",
                          style: {
                            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                            background:
                              "linear-gradient(180deg, var(--envelope2) 0%, var(--envelope3) 100%)",
                          },
                          initial: { rotateX: 0 },
                          animate: { rotateX: -180 },
                          transition: { duration: 0.6, ease: "easeInOut" },
                        }),
                      }),
                    }),
                  })
                : (0, n.jsxs)(l.P.div, {
                    className:
                      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-6",
                    exit: { opacity: 0 },
                    transition: { duration: 0.8 },
                    "data-theme":
                      "moss-green" === h
                        ? "green"
                        : "burgundy" === h
                          ? "red"
                          : h,
                    children: [
                      (0, n.jsx)(l.P.h1, {
                        className:
                          "text-gold text-[15px] min-[375px]:text-base md:text-base tracking-[0.35em] font-medium ".concat(
                            z ? "mb-16 md:mb-18" : "mb-4 md:mb-6 text-center",
                            " md:mt-[30px] mt-[10px]",
                          ),
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 },
                        style: { fontFamily: "serif" },
                        children:
                          "en" === S
                            ? d.xG.title.en
                            : "ko" === S
                              ? d.xG.title.ko
                              : "0ac084a9-4b4d-47e0-a280-ca95998d4300" === P
                                ? "SAVE THE DATE"
                                : "TR\xc2N TRỌNG K\xcdNH MỜI",
                      }),
                      !z &&
                        ("thai-nhi-nha-gai" === y ||
                        "thai-nhi-nha-trai" === y ||
                        "tu-hang" === y
                          ? (0, n.jsx)(l.P.h2, {
                              className:
                                "text-color-input text-[35px] md:text-[40px] ".concat(
                                  c().className,
                                  " mb-8 md:mb-12 text-center",
                                ),
                              initial: { opacity: 0, y: -10 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.6, delay: 0.15 },
                              style: {
                                opacity: 0.85,
                                letterSpacing: "0.03em",
                                lineHeight: 1.4,
                                fontFamily: "serif",
                              },
                              children: s,
                            })
                          : (0, n.jsx)(l.P.h2, {
                              className:
                                "text-color-input text-[35px] md:text-[40px] ".concat(
                                  c().className,
                                  " mb-8 md:mb-12 text-center text-[#1d241b]",
                                ),
                              initial: { opacity: 0, y: -10 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.6, delay: 0.15 },
                              style: {
                                opacity: 0.85,
                                letterSpacing: "0.03em",
                                lineHeight: 1.4,
                              },
                              children: s,
                            })),
                      (0, n.jsx)(l.P.div, {
                        className: "relative",
                        initial: { opacity: 0, scale: 0.95 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { duration: 0.7, delay: 0.25 },
                        children: (0, n.jsxs)(l.P.div, {
                          className: "relative cursor-pointer",
                          onClick: H,
                          whileHover: { y: -2, transition: { duration: 0.2 } },
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-5 bg-black/10 blur-lg rounded-full",
                            }),
                            (0, n.jsx)("img", {
                              src: L,
                              alt: "invitation",
                              className:
                                "w-[320px] md:w-[420px] object-contain",
                              loading: "eager",
                            }),
                            (0, n.jsx)(b, { color: "white" }),
                          ],
                        }),
                      }),
                      (0, n.jsxs)(l.P.div, {
                        className: "mt-14 md:mt-20 text-center",
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.9, duration: 0.5 },
                        style: { fontFamily: "serif" },
                        children: [
                          (u || x) &&
                            (0, n.jsx)("div", {
                              className:
                                "flex flex-row flex-wrap items-center justify-center text-color-input text-lg md:text-xl mb-2 tracking-[0.13em] uppercase text-[#1d241b]",
                              children:
                                "groom" === p
                                  ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: "whitespace-nowrap",
                                          children: V,
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "mx-3 text-gold italic font-serif text-2xl",
                                          children: "&",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: "whitespace-nowrap",
                                          children: D,
                                        }),
                                      ],
                                    })
                                  : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: "whitespace-nowrap",
                                          children: D,
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "mx-3 text-gold italic font-serif text-2xl",
                                          children: "&",
                                        }),
                                        (0, n.jsx)("span", {
                                          className: "whitespace-nowrap",
                                          children: V,
                                        }),
                                      ],
                                    }),
                            }),
                          w && k
                            ? (0, n.jsxs)("div", {
                                className: "space-y-1 text-[#1d241b]",
                                children: [
                                  (0, n.jsxs)("p", {
                                    className:
                                      "text-color-input text-base md:text-lg tracking-[0.12em]",
                                    children: [
                                      (0, n.jsx)("span", { children: q.label }),
                                      " • ",
                                      q.date,
                                    ],
                                  }),
                                  (0, n.jsxs)("p", {
                                    className:
                                      "text-color-input text-base md:text-lg tracking-[0.12em]",
                                    children: [
                                      (0, n.jsx)("span", { children: F.label }),
                                      " • ",
                                      F.date,
                                    ],
                                  }),
                                ],
                              })
                            : (0, n.jsx)("p", {
                                className:
                                  "text-color-input text-lg md:text-xl tracking-[0.12em] font-light text-[#1d241b]",
                                children:
                                  "ko" === S
                                    ? ((e) => {
                                        let [t, a, n] = e.split(/[./-]/);
                                        return ""
                                          .concat(n, ".")
                                          .concat(a.padStart(2, "0"), ".")
                                          .concat(t.padStart(2, "0"));
                                      })(m || "")
                                    : m,
                              }),
                          N &&
                            (0, n.jsxs)("p", {
                              className:
                                "text-[#2a1f19] text-sm md:text-base italic mt-2",
                              style: { fontFamily: "serif" },
                              children: ["(", N, ")"],
                            }),
                        ],
                      }),
                    ],
                  }),
            })
          : (0, n.jsx)(g, {
              open: !_,
              onOpen: H,
              guestName: s,
              brideName: null != D ? D : "",
              groomName: null != V ? V : "",
              weddingDate: m,
              firstEvent: null == q ? void 0 : q.date,
              secondEvent: null == F ? void 0 : F.date,
              image: M,
            });
      }
      var N = a(49155),
        w = a(34788);
      let k = (e) => {
        if (!e) return "";
        let t = e.trim().split(" ");
        return t[t.length - 1].charAt(0).toUpperCase();
      };
      function C(e) {
        let {
            brideName: t,
            groomName: a,
            side: s,
            lang: o = "vi",
            customLogo: c,
          } = e,
          m = [
            {
              href: "#story",
              label:
                "en" === o
                  ? (0, d.t)(d.T6.story, "en")
                  : "ko" === o
                    ? (0, d.t)(d.T6.story, "ko")
                    : "C\xe2u chuyện",
            },
            {
              href: "#timeline",
              label:
                "en" === o
                  ? (0, d.t)(d.T6.timeline, "en")
                  : "ko" === o
                    ? (0, d.t)(d.T6.timeline, "ko")
                    : "Lịch tr\xecnh",
            },
            {
              href: "#gallery",
              label:
                "en" === o
                  ? (0, d.t)(d.T6.gallery, "en")
                  : "ko" === o
                    ? (0, d.t)(d.T6.gallery, "ko")
                    : "Album",
            },
            {
              href: "#rsvp",
              label:
                "en" === o
                  ? (0, d.t)(d.T6.wishes, "en")
                  : "ko" === o
                    ? (0, d.t)(d.T6.wishes, "ko")
                    : "Gửi lời ch\xfac",
            },
          ],
          [u, x] = (0, i.useState)(!1),
          [h, p] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = () => {
              x(window.scrollY > 50);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(l.P.header, {
                initial: { y: -100 },
                animate: { y: 0 },
                transition: { duration: 0.6 },
                className:
                  "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ".concat(
                    u
                      ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
                      : "bg-transparent py-6",
                  ),
                children: (0, n.jsxs)("nav", {
                  className:
                    "mx-auto w-full flex max-w-7xl items-center justify-between px-6",
                  children: [
                    (0, n.jsx)("div", {
                      className: "hidden items-center gap-8 md:flex",
                      children: m
                        .slice(0, 2)
                        .map((e) =>
                          (0, n.jsx)(
                            "a",
                            {
                              href: e.href,
                              className:
                                "text-sm uppercase tracking-widest transition-colors ".concat(
                                  u
                                    ? "text-foreground hover:text-primary"
                                    : "text-white hover:text-white/70",
                                ),
                              children: e.label,
                            },
                            e.href,
                          ),
                        ),
                    }),
                    (0, n.jsx)("a", {
                      href: "#",
                      className:
                        "font-serif text-xl tracking-wider md:text-2xl ".concat(
                          u ? "text-foreground" : "text-white",
                        ),
                      children: (null == c ? void 0 : c.trim())
                        ? c
                        : "groom" === s
                          ? "".concat(k(a), " & ").concat(k(t))
                          : "".concat(k(t), " & ").concat(k(a)),
                    }),
                    (0, n.jsx)("div", {
                      className: "hidden items-center gap-8 md:flex",
                      children: m
                        .slice(2)
                        .map((e) =>
                          (0, n.jsx)(
                            "a",
                            {
                              href: e.href,
                              className:
                                "text-sm uppercase tracking-widest transition-colors ".concat(
                                  u
                                    ? "text-foreground hover:text-primary"
                                    : "text-white hover:text-white/70",
                                ),
                              children: e.label,
                            },
                            e.href,
                          ),
                        ),
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => p(!0),
                      className: "md:hidden ".concat(
                        u ? "text-foreground" : "text-white",
                      ),
                      "aria-label": "Mở menu",
                      children: (0, n.jsx)(N.A, { className: "h-6 w-6" }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(r.N, {
                children:
                  h &&
                  (0, n.jsx)(l.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className: "fixed inset-0 z-50 bg-background",
                    children: (0, n.jsxs)("div", {
                      className:
                        "flex h-full flex-col items-center justify-center",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: () => p(!1),
                          className: "absolute right-6 top-6 text-foreground",
                          "aria-label": "Đ\xf3ng menu",
                          children: (0, n.jsx)(w.A, { className: "h-6 w-6" }),
                        }),
                        (0, n.jsx)("nav", {
                          className: "flex flex-col items-center gap-8",
                          children: m.map((e, t) =>
                            (0, n.jsx)(
                              l.P.a,
                              {
                                href: e.href,
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 0.1 * t },
                                onClick: () => p(!1),
                                className:
                                  "font-serif text-2xl text-foreground transition-colors hover:text-primary",
                                children: e.label,
                              },
                              e.href,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          })
        );
      }
      var T = a(63784);
      let P = (e) => {
          let [t, a, n] = e.split(/[./-]/);
          return new Date(+n, a - 1, +t);
        },
        S = (e) => (e ? e.trim().split(" ").slice(-2).join(" ") : "");
      function I(e) {
        let {
          data: t,
          groomName: a,
          brideName: i,
          side: s,
          groomWeddingDate: r,
          brideWeddingDate: o,
          groomShortName: c,
          brideShortName: d,
          nameLayout: m = "two-lines",
          lang: u = "vi",
        } = e;
        ((a = (null == c ? void 0 : c.trim()) || S(a) || a),
          (i = (null == d ? void 0 : d.trim()) || S(i) || i));
        let x = (0, T.Yq)(null == t ? void 0 : t.date),
          h = (null == t ? void 0 : t.city) || "Chưa c\xf3 địa chỉ, Việt Nam",
          p =
            (null == t ? void 0 : t.image) ||
            "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777111615/462142930_960299022805312_2040105690201559005_n_m2cx29.jpg",
          g =
            r && o
              ? P(r) <= P(o)
                ? [
                    { label: "Nh\xe0 G\xe1i", date: r },
                    { label: "Nh\xe0 Trai", date: o },
                  ]
                : [
                    { label: "Nh\xe0 Trai", date: o },
                    { label: "Nh\xe0 G\xe1i", date: r },
                  ]
              : [];
        return (0, n.jsxs)("section", {
          className: "relative h-screen w-full overflow-hidden border-white",
          children: [
            (0, n.jsx)(l.P.div, {
              initial: { scale: 1.1 },
              animate: { scale: 1 },
              transition: { duration: 6, ease: "easeOut" },
              className:
                "absolute inset-[-2px] bg-cover bg-center bg-no-repeat border-white mx-auto md:w-[50%]",
              style: { backgroundImage: "url('".concat(p, "')") },
              children: (0, n.jsx)("div", {
                className: "absolute inset-[-2px] bg-black/25",
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "border-white relative z-10 flex h-full flex-col items-center justify-end px-4 text-center text-white pb-[10vh] md:pb-[22vh]",
              children: [
                (0, n.jsx)(l.P.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className:
                    "mb-4 font-sans text-sm uppercase tracking-[0.3em] md:text-base",
                  children: null == t ? void 0 : t.title,
                }),
                (0, n.jsxs)(l.P.h1, {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1, delay: 0.4 },
                  className:
                    "font-serif text-4xl font-light italic leading-tight md:text-6xl lg:text-7xl",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "block min-[500px]:hidden",
                      children: [
                        "single" === m &&
                          (0, n.jsx)("span", {
                            children:
                              "groom" === s
                                ? "".concat(a, " & ").concat(i)
                                : "".concat(i, " & ").concat(a),
                          }),
                        "two-lines" === m &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("span", {
                                className: "block",
                                children: "groom" === s ? a : i,
                              }),
                              (0, n.jsxs)("span", {
                                className: "block mt-2",
                                children: ["& ", "groom" === s ? i : a],
                              }),
                            ],
                          }),
                        "ampersand-center" === m &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("span", {
                                className: "block",
                                children: "groom" === s ? a : i,
                              }),
                              (0, n.jsx)("span", {
                                className: "block my-2",
                                children: "&",
                              }),
                              (0, n.jsx)("span", {
                                className: "block",
                                children: "groom" === s ? i : a,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      className: "hidden min-[500px]:block",
                      children:
                        "groom" === s
                          ? "".concat(a, " & ").concat(i)
                          : "".concat(i, " & ").concat(a),
                    }),
                  ],
                }),
                (0, n.jsx)(l.P.div, {
                  initial: { opacity: 0, scaleX: 0 },
                  animate: { opacity: 1, scaleX: 1 },
                  transition: { duration: 0.8, delay: 0.8 },
                  className: "my-6 h-px w-32 bg-white/60",
                }),
                (0, n.jsxs)(l.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 1.2 },
                  className:
                    "flex flex-col items-center gap-2 text-sm uppercase tracking-widest",
                  children: [
                    g.length > 0
                      ? (0, n.jsx)(n.Fragment, {
                          children: g.map((e) =>
                            (0, n.jsxs)(
                              "span",
                              {
                                className:
                                  "font-serif text-lg md:text-2xl normal-case",
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "text-sm md:text-lg",
                                    children: e.label,
                                  }),
                                  " •",
                                  " ",
                                  e.date,
                                ],
                              },
                              e.label,
                            ),
                          ),
                        })
                      : (0, n.jsx)("span", {
                          className: "font-serif text-2xl md:text-3xl",
                          children:
                            "ko" === u
                              ? ((e) => {
                                  let [t, a, n] = e.split(/[./-]/);
                                  return ""
                                    .concat(n, ".")
                                    .concat(a.padStart(2, "0"), ".")
                                    .concat(t.padStart(2, "0"));
                                })(x || "")
                              : x,
                        }),
                    (0, n.jsx)("span", {
                      className: "text-xs text-white/80 mt-4",
                      children: h,
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className:
                "border-white absolute bottom-0 left-0 right-0 overflow-hidden",
              children: (0, n.jsx)("svg", {
                viewBox: "0 0 1440 120",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-full",
                preserveAspectRatio: "none",
                children: (0, n.jsx)("path", {
                  d: "M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",
                  className: "fill-background",
                }),
              }),
            }),
          ],
        });
      }
      var z = a(74570);
      let D = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
      function V(e) {
        let { children: t } = e,
          a = (0, i.useRef)(null),
          [s, l] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = a.current;
            if (!e) return;
            let t = () => {
              let t = parseFloat(getComputedStyle(e).lineHeight);
              l(1 >= Math.round(e.scrollHeight / t));
            };
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
          }, [t]),
          (0, n.jsx)("p", {
            ref: a,
            className:
              "whitespace-pre-line leading-8 text-muted-foreground ".concat(
                s ? "text-center" : "text-justify",
              ),
            children: t,
          })
        );
      }
      function _(e) {
        let {
            data: t,
            brideName: a,
            groomName: s,
            side: r,
            weddingId: o,
            lang: c = "vi",
            brideShortName: u,
            groomShortName: x,
          } = e,
          h = ["3bed75c3-7bb5-43c0-a87a-1d05fa19a68d"].includes(o),
          p = (0, i.useRef)(null),
          g = (0, z.W)(p, { once: !0, margin: "-100px" }),
          v =
            (null == t ? void 0 : t.image) ||
            "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777113214/QT000784_mrnf9t.jpg",
          f = (null == t ? void 0 : t.content) || [
            { title: "Lần Đầu Gặp Gỡ", desc: "" },
            { title: "Những Khoảnh Khắc Đ\xe1ng Nhớ", desc: "" },
            { title: "Lời Cầu H\xf4n", desc: "" },
          ];
        return 0 ===
          f.filter((e) => {
            var t;
            return null == (t = e.desc) ? void 0 : t.trim();
          }).length
          ? null
          : (0, n.jsx)("section", {
              id: "story",
              className: "py-10 md:py-20",
              ref: p,
              children: (0, n.jsxs)("div", {
                className: "mx-auto max-w-7xl px-6",
                children: [
                  (0, n.jsxs)(l.P.div, {
                    initial: "hidden",
                    animate: g ? "visible" : "hidden",
                    variants: D,
                    transition: { duration: 0.8 },
                    className: "mb-16 text-center",
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "mb-3 text-[15px] min-[375px]:text-sm uppercase tracking-[0.3em] text-primary",
                        children:
                          "en" === c
                            ? (0, d.t)(d.ym.subtitle, "en")
                            : "ko" === c
                              ? (0, d.t)(d.ym.subtitle, "ko")
                              : "C\xe2u chuyện của ch\xfang t\xf4i",
                      }),
                      !h &&
                        (0, n.jsx)("h2", {
                          className:
                            "font-serif text-[28px] min-[375px]:text-3xl text-foreground md:text-5xl text-text-main",
                          children:
                            "en" === c
                              ? (0, d.t)(d.ym.title, "en")
                              : "ko" === c
                                ? (0, d.t)(d.ym.title, "ko")
                                : "H\xe0nh Tr\xecnh T\xecnh Y\xeau",
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
                    children: [
                      (0, n.jsxs)(l.P.div, {
                        initial: { opacity: 0, x: -80 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8, ease: "easeOut" },
                        viewport: { once: !0 },
                        className: "relative overflow-hidden",
                        children: [
                          (0, n.jsx)("div", {
                            className: "relative aspect-[4/4] overflow-hidden",
                            children: (0, n.jsx)(m.default, {
                              src: v,
                              alt: "Cặp đ\xf4i",
                              fill: !0,
                              className:
                                "object-cover transition-transform duration-700 hover:scale-105",
                              sizes: "(max-width: 768px) 100vw, 50vw",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "absolute -right-4 -top-4 -z-10 h-full w-full rounded-lg border-2 border-primary/30",
                          }),
                        ],
                      }),
                      (0, n.jsxs)(l.P.div, {
                        initial: "hidden",
                        animate: g ? "visible" : "hidden",
                        variants: D,
                        transition: { duration: 0.8, delay: 0.4 },
                        className: "flex flex-col justify-center md:mt-10",
                        children: [
                          f
                            .filter((e) => {
                              var t;
                              return null == (t = e.desc) ? void 0 : t.trim();
                            })
                            .map((e, t) =>
                              (0, n.jsxs)(
                                l.P.div,
                                {
                                  initial: { opacity: 0, y: 30 },
                                  animate: g ? { opacity: 1, y: 0 } : {},
                                  transition: {
                                    duration: 0.8,
                                    delay: 0.3 + 0.2 * t,
                                  },
                                  className: "mb-8",
                                  children: [
                                    (0, n.jsx)("h3", {
                                      className:
                                        "mb-4 font-serif text-2xl text-foreground md:text-3xl",
                                      children: e.title,
                                    }),
                                    (0, n.jsx)(V, { children: e.desc }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          (0, n.jsxs)("div", {
                            className: "mt-10 flex items-center gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "h-px flex-1 bg-border",
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "font-serif text-xl italic text-primary",
                                children:
                                  "groom" === r
                                    ? ""
                                        .concat(x || (0, T.TU)(s), " & ")
                                        .concat(u || (0, T.TU)(a))
                                    : ""
                                        .concat(u || (0, T.TU)(a), " & ")
                                        .concat(x || (0, T.TU)(s)),
                              }),
                              (0, n.jsx)("div", {
                                className: "h-px flex-1 bg-border",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      var A = a(756);
      function E(e) {
        let { children: t } = e,
          a = (0, i.useRef)(null),
          [s, l] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = a.current;
            if (!e) return;
            let t = () => {
              let t = parseFloat(getComputedStyle(e).lineHeight);
              l(1 >= Math.round(e.scrollHeight / t));
            };
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
          }, [t]),
          (0, n.jsx)("p", {
            ref: a,
            className:
              "mx-auto max-w-sm leading-8 text-muted-foreground whitespace-pre-line ".concat(
                s ? "text-center" : "text-justify",
              ),
            children: t,
          })
        );
      }
      function L(e) {
        var t,
          a,
          s,
          r,
          o,
          c,
          u,
          x,
          h,
          p,
          g,
          v,
          f,
          b,
          j,
          y,
          N,
          w,
          k,
          C,
          T,
          P,
          S,
          I,
          D,
          V,
          _,
          L,
          M,
          H,
          B,
          q;
        let { data: F, side: R, weddingId: W, lang: G = "vi" } = e,
          O = (0, i.useRef)(null),
          Q = (0, z.W)(O, { once: !0, margin: "-100px" }),
          U = [
            "b03f4443-8d80-47b4-9059-da7e793e3887",
            "3bed75c3-7bb5-43c0-a87a-1d05fa19a68d",
          ].includes(W),
          Y =
            (null == F || null == (t = F.groom) ? void 0 : t.name) ||
            "Nguyễn Anh Tuấn Ngọc",
          K = (null == F || null == (a = F.groom) ? void 0 : a.bio) || "",
          X =
            null == F || null == (r = F.groom) || null == (s = r.image)
              ? void 0
              : s.trim(),
          Z =
            (null == F || null == (o = F.bride) ? void 0 : o.name) ||
            "Nguyễn Thị Th\xf9y Trinh",
          $ = (null == F || null == (c = F.bride) ? void 0 : c.bio) || "",
          J =
            null == F || null == (x = F.bride) || null == (u = x.image)
              ? void 0
              : u.trim(),
          ee = (null == F || null == (h = F.groom) ? void 0 : h.rank) || "",
          et = (null == F || null == (p = F.bride) ? void 0 : p.rank) || "",
          ea = (null == F || null == (g = F.groom) ? void 0 : g.address) || "",
          en = (null == F || null == (v = F.bride) ? void 0 : v.address) || "",
          ei = (e) => (null == e ? void 0 : e.trim());
        return (0, n.jsx)("section", {
          className: "py-10 md:py-20",
          ref: O,
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 40 },
                animate: Q ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "mb-16 text-center",
                children: [
                  (0, n.jsx)("p", {
                    className:
                      "mb-3 text-sm uppercase tracking-[0.3em] text-primary",
                    children:
                      "en" === G
                        ? "groom" === R
                          ? d.xK.coupleSide.groom.en
                          : d.xK.coupleSide.bride.en
                        : "ko" === G
                          ? "groom" === R
                            ? d.xK.coupleSide.groom.ko
                            : d.xK.coupleSide.bride.ko
                          : "groom" === R
                            ? "Ch\xfa Rể & C\xf4 D\xe2u"
                            : "C\xf4 D\xe2u & Ch\xfa Rể",
                  }),
                  !U &&
                    (0, n.jsx)("h2", {
                      className:
                        "font-serif text-[28px] min-[375px]:text-3xl text-foreground md:text-5xl text-text-main",
                      children:
                        "en" === G
                          ? (0, d.t)(d.xK.title, "en")
                          : "ko" === G
                            ? (0, d.t)(d.xK.title, "ko")
                            : null == F
                              ? void 0
                              : F.title,
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
                children:
                  "groom" === R
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)(l.P.div, {
                            initial: { opacity: 0, x: -50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0, amount: 0.3 },
                            transition: { duration: 0.8 },
                            className: "group text-center",
                            children: [
                              X &&
                                (0, n.jsxs)("div", {
                                  className:
                                    "relative mx-auto mb-8 h-80 w-64 overflow-hidden rounded-full",
                                  children: [
                                    (0, n.jsx)(m.default, {
                                      src: X,
                                      alt: "Ch\xfa rể",
                                      fill: !0,
                                      className:
                                        "object-cover transition-transform duration-700 group-hover:scale-110",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent",
                                    }),
                                  ],
                                }),
                              (0, n.jsxs)(l.P.div, {
                                initial: { opacity: 0, y: 20 },
                                animate: Q ? { opacity: 1, y: 0 } : {},
                                transition: { duration: 0.6, delay: 0.4 },
                                children: [
                                  (0, n.jsx)("p", {
                                    className:
                                      "mb-2 text-sm uppercase tracking-[0.2em] text-primary",
                                    children: ee,
                                  }),
                                  (0, n.jsx)("h3", {
                                    className:
                                      "mb-4 font-serif md:text-3xl text-xl text-foreground",
                                    children: Y,
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "mb-5 space-y-1",
                                    children: (0, n.jsxs)("div", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: [
                                        ei(
                                          null == F || null == (f = F.groom)
                                            ? void 0
                                            : f.father,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              d.xK.father[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (b = F.groom)
                                                    ? void 0
                                                    : b.father,
                                              }),
                                            ],
                                          }),
                                        ei(
                                          null == F || null == (j = F.groom)
                                            ? void 0
                                            : j.mother,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              ei(
                                                null == F ||
                                                  null == (y = F.groom)
                                                  ? void 0
                                                  : y.father,
                                              )
                                                ? d.xK.mother[G]
                                                : d.xK.motherOnly[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (N = F.groom)
                                                    ? void 0
                                                    : N.mother,
                                              }),
                                            ],
                                          }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-center mt-3 text-[12px]",
                                          children: ea,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mx-auto my-5 h-px w-20 bg-primary/40",
                                  }),
                                  (0, n.jsx)(E, { children: K }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)(l.P.div, {
                            initial: { opacity: 0, x: 50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0, amount: 0.3 },
                            transition: { duration: 0.8 },
                            className: "group text-center",
                            children: [
                              J &&
                                (0, n.jsxs)("div", {
                                  className:
                                    "relative mx-auto mb-8 h-80 w-64 overflow-hidden rounded-full",
                                  children: [
                                    (0, n.jsx)(m.default, {
                                      src: J,
                                      alt: "C\xf4 d\xe2u",
                                      fill: !0,
                                      className:
                                        "object-cover transition-transform duration-700 group-hover:scale-110",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent",
                                    }),
                                  ],
                                }),
                              (0, n.jsxs)(l.P.div, {
                                initial: { opacity: 0, y: 20 },
                                animate: Q ? { opacity: 1, y: 0 } : {},
                                transition: { duration: 0.6, delay: 0.5 },
                                children: [
                                  (0, n.jsx)("p", {
                                    className:
                                      "mb-2 text-sm uppercase tracking-[0.2em] text-primary",
                                    children: et,
                                  }),
                                  (0, n.jsx)("h3", {
                                    className:
                                      "mb-4 font-serif md:text-3xl text-xl text-foreground",
                                    children: Z,
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "mb-5 space-y-1",
                                    children: (0, n.jsxs)("div", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: [
                                        ei(
                                          null == F || null == (w = F.bride)
                                            ? void 0
                                            : w.father,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              d.xK.father[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (k = F.bride)
                                                    ? void 0
                                                    : k.father,
                                              }),
                                            ],
                                          }),
                                        ei(
                                          null == F || null == (C = F.bride)
                                            ? void 0
                                            : C.mother,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              ei(
                                                null == F ||
                                                  null == (T = F.bride)
                                                  ? void 0
                                                  : T.father,
                                              )
                                                ? d.xK.mother[G]
                                                : d.xK.motherOnly[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (P = F.bride)
                                                    ? void 0
                                                    : P.mother,
                                              }),
                                            ],
                                          }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-center mt-3 text-[12px]",
                                          children: en,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mx-auto my-5 h-px w-20 bg-primary/40",
                                  }),
                                  (0, n.jsx)(E, { children: $ }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)(l.P.div, {
                            initial: { opacity: 0, x: 50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0, amount: 0.3 },
                            transition: { duration: 0.8 },
                            className: "group text-center",
                            children: [
                              J &&
                                (0, n.jsxs)("div", {
                                  className:
                                    "relative mx-auto mb-8 h-80 w-64 overflow-hidden rounded-full",
                                  children: [
                                    (0, n.jsx)(m.default, {
                                      src: J,
                                      alt: "C\xf4 d\xe2u",
                                      fill: !0,
                                      className:
                                        "object-cover transition-transform duration-700 group-hover:scale-110",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent",
                                    }),
                                  ],
                                }),
                              (0, n.jsxs)(l.P.div, {
                                initial: { opacity: 0, y: 20 },
                                animate: Q ? { opacity: 1, y: 0 } : {},
                                transition: { duration: 0.6, delay: 0.5 },
                                children: [
                                  (0, n.jsx)("p", {
                                    className:
                                      "mb-2 text-sm uppercase tracking-[0.2em] text-primary",
                                    children: et,
                                  }),
                                  (0, n.jsx)("h3", {
                                    className:
                                      "mb-4 font-serif md:text-3xl text-xl text-foreground",
                                    children: Z,
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "mb-5 space-y-1",
                                    children: (0, n.jsxs)("div", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: [
                                        ei(
                                          null == F || null == (S = F.bride)
                                            ? void 0
                                            : S.father,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              d.xK.father[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (I = F.bride)
                                                    ? void 0
                                                    : I.father,
                                              }),
                                            ],
                                          }),
                                        ei(
                                          null == F || null == (D = F.bride)
                                            ? void 0
                                            : D.mother,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              ei(
                                                null == F ||
                                                  null == (V = F.bride)
                                                  ? void 0
                                                  : V.father,
                                              )
                                                ? d.xK.mother[G]
                                                : d.xK.motherOnly[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (_ = F.bride)
                                                    ? void 0
                                                    : _.mother,
                                              }),
                                            ],
                                          }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-center mt-3 text-[12px]",
                                          children: en,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mx-auto my-5 h-px w-20 bg-primary/40",
                                  }),
                                  (0, n.jsx)(E, { children: $ }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)(l.P.div, {
                            initial: { opacity: 0, x: -50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0, amount: 0.3 },
                            transition: { duration: 0.8 },
                            className: "group text-center",
                            children: [
                              X &&
                                (0, n.jsxs)("div", {
                                  className:
                                    "relative mx-auto mb-8 h-80 w-64 overflow-hidden rounded-full",
                                  children: [
                                    (0, n.jsx)(m.default, {
                                      src: X,
                                      alt: "Ch\xfa rể",
                                      fill: !0,
                                      className:
                                        "object-cover transition-transform duration-700 group-hover:scale-110",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent",
                                    }),
                                  ],
                                }),
                              (0, n.jsxs)(l.P.div, {
                                initial: { opacity: 0, y: 20 },
                                animate: Q ? { opacity: 1, y: 0 } : {},
                                transition: { duration: 0.6, delay: 0.4 },
                                children: [
                                  (0, n.jsx)("p", {
                                    className:
                                      "mb-2 text-sm uppercase tracking-[0.2em] text-primary",
                                    children: ee,
                                  }),
                                  (0, n.jsx)("h3", {
                                    className:
                                      "mb-4 font-serif md:text-3xl text-xl text-foreground",
                                    children: Y,
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "mb-5 space-y-1",
                                    children: (0, n.jsxs)("div", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: [
                                        ei(
                                          null == F || null == (L = F.groom)
                                            ? void 0
                                            : L.father,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              d.xK.father[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (M = F.groom)
                                                    ? void 0
                                                    : M.father,
                                              }),
                                            ],
                                          }),
                                        ei(
                                          null == F || null == (H = F.groom)
                                            ? void 0
                                            : H.mother,
                                        ) &&
                                          (0, n.jsxs)("p", {
                                            children: [
                                              ei(
                                                null == F ||
                                                  null == (B = F.groom)
                                                  ? void 0
                                                  : B.father,
                                              )
                                                ? d.xK.mother[G]
                                                : d.xK.motherOnly[G],
                                              " ",
                                              (0, n.jsx)("span", {
                                                className:
                                                  "font-medium text-foreground/90",
                                                children:
                                                  null == F ||
                                                  null == (q = F.groom)
                                                    ? void 0
                                                    : q.mother,
                                              }),
                                            ],
                                          }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-center mt-3 text-[12px]",
                                          children: ea,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mx-auto my-5 h-px w-20 bg-primary/40",
                                  }),
                                  (0, n.jsx)(E, { children: K }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
              }),
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, scale: 0 },
                animate: Q ? { opacity: 1, scale: 1 } : {},
                transition: { duration: 0.6, delay: 0.8 },
                className: "mt-16 flex items-center justify-center",
                children: [
                  (0, n.jsx)("div", {
                    className: "h-px flex-1 max-w-32 bg-border",
                  }),
                  (0, n.jsx)(l.P.div, {
                    animate: { scale: [1, 1.2, 1] },
                    transition: { duration: 1.5, repeat: 1 / 0 },
                    className: "mx-6",
                    children: (0, n.jsx)(A.A, {
                      className: "h-8 w-8 fill-primary text-primary",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "h-px flex-1 max-w-32 bg-border",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var M = a(88661),
        H = a.n(M);
      function B(e) {
        let { person: t, index: a, type: s } = e,
          [r, o] = (0, i.useState)(!1),
          c = "bridesmaid" === s,
          d = c ? "from-rose-100 to-pink-50" : "from-sky-100 to-blue-50",
          u = c ? "border-rose-200" : "border-sky-200",
          x = c ? "text-rose-500" : "text-sky-500";
        return (0, n.jsx)(l.P.div, {
          id: "bridal-party",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5, delay: 0.1 * a },
          className:
            "perspective-1000 w-[160px] sm:w-[180px] md:w-[190px] flex-shrink-0",
          children: (0, n.jsxs)(l.P.div, {
            className:
              "relative w-full h-[280px] cursor-pointer will-change-transform transform-gpu",
            style: {
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
              transform: "translateZ(0)",
            },
            animate: { rotateY: 180 * !!r },
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            onClick: () => {
              o((e) => !e);
            },
            children: [
              (0, n.jsxs)("div", {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-b "
                  .concat(d, " border ")
                  .concat(
                    u,
                    " p-4 flex flex-col items-center justify-center backface-hidden shadow-lg hover:shadow-xl transition-shadow duration-300",
                  ),
                style: {
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "translateZ(1px)",
                },
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 ".concat(
                        u,
                        " mb-3 shadow-md",
                      ),
                    children: (0, n.jsx)(m.default, {
                      src: t.image || "/placeholder.svg",
                      alt: t.name,
                      fill: !0,
                      className: "object-cover",
                      sizes: "(max-width: 768px) 100vw, 50vw",
                      loading: "lazy",
                      unoptimized: !0,
                    }),
                  }),
                  (0, n.jsx)("h3", {
                    className:
                      "font-serif text-lg md:text-xl text-foreground mb-1 text-center",
                    children: t.name,
                  }),
                  (0, n.jsx)("p", {
                    className: "text-sm ".concat(x, " font-medium text-center"),
                    children: t.role,
                  }),
                  (0, n.jsxs)(l.P.div, {
                    className:
                      "mt-3 flex items-center gap-1 text-xs text-muted-foreground",
                    animate: { y: [0, -3, 0] },
                    transition: { duration: 1.5, repeat: 1 / 0 },
                    children: [
                      (0, n.jsx)("span", { children: "Nhấn để xem th\xeam" }),
                      (0, n.jsx)(A.A, { className: "w-3 h-3" }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-b "
                  .concat(d, " border ")
                  .concat(u, " p-4 flex flex-col backface-hidden shadow-xl"),
                style: {
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg) translateZ(1px)",
                },
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-2 mb-3",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "relative w-10 h-10 rounded-full overflow-hidden border-2 ".concat(
                            u,
                          ),
                        children: (0, n.jsx)(m.default, {
                          src: t.image || "/placeholder.svg",
                          alt: t.name,
                          fill: !0,
                          className: "object-cover",
                          sizes: "(max-width: 768px) 100vw, 50vw",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("h4", {
                            className: "font-serif text-sm font-semibold",
                            children: t.name,
                          }),
                          (0, n.jsx)("p", {
                            className: "text-xs ".concat(x),
                            children: t.role,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "overflow-y-auto scrollbar-thin flex-1",
                    children: (0, n.jsx)("p", {
                      className:
                        "text-xs text-foreground/80 mb-3 leading-relaxed",
                      children: t.bio,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function q(e) {
        let { bridesmaids: t, groomsmen: a } = e;
        return (t && 0 !== t.length) || (a && 0 !== a.length)
          ? (0, n.jsxs)("section", {
              className: "jsx-6a3947a052dc4998 py-16 md:py-24 overflow-hidden",
              children: [
                (0, n.jsxs)("div", {
                  className: "jsx-6a3947a052dc4998 container mx-auto px-4",
                  children: [
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6 },
                      className: "text-center mb-12",
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "jsx-6a3947a052dc4998 mb-3 text-sm uppercase tracking-[0.3em] text-primary",
                          children: "ĐO\xc0N RƯỚC D\xc2U",
                        }),
                        (0, n.jsx)("h2", {
                          className:
                            "jsx-6a3947a052dc4998 font-serif text-3xl md:text-4xl text-foreground mb-3",
                          children: "Ph\xf9 D\xe2u & Ph\xf9 Rể",
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "jsx-6a3947a052dc4998 text-muted-foreground max-w-md mx-auto text-sm",
                          children:
                            "Những người bạn th\xe2n y\xeau sẽ đồng h\xe0nh c\xf9ng ch\xfang t\xf4i trong ng\xe0y trọng đại",
                        }),
                      ],
                    }),
                    t.length > 0 &&
                      (0, n.jsxs)("div", {
                        className: "jsx-6a3947a052dc4998 mb-12",
                        children: [
                          (0, n.jsxs)(l.P.div, {
                            initial: { opacity: 0, x: -20 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0 },
                            className:
                              "flex items-center gap-3 mb-6 justify-center",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "jsx-6a3947a052dc4998 h-px w-12 bg-rose-300",
                              }),
                              (0, n.jsx)("h3", {
                                className:
                                  "jsx-6a3947a052dc4998 font-serif text-xl text-rose-500",
                                children: "Ph\xf9 D\xe2u",
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "jsx-6a3947a052dc4998 h-px w-12 bg-rose-300",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "jsx-6a3947a052dc4998 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto",
                            children: t.map((e, t) =>
                              (0, n.jsx)(
                                B,
                                { person: e, index: t, type: "bridesmaid" },
                                e.id || e.name,
                              ),
                            ),
                          }),
                        ],
                      }),
                    a.length > 0 &&
                      (0, n.jsxs)("div", {
                        className: "jsx-6a3947a052dc4998",
                        children: [
                          (0, n.jsxs)(l.P.div, {
                            initial: { opacity: 0, x: 20 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0 },
                            className:
                              "flex items-center gap-3 mb-6 justify-center",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "jsx-6a3947a052dc4998 h-px w-12 bg-sky-300",
                              }),
                              (0, n.jsx)("h3", {
                                className:
                                  "jsx-6a3947a052dc4998 font-serif text-xl text-sky-500",
                                children: "Ph\xf9 Rể",
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "jsx-6a3947a052dc4998 h-px w-12 bg-sky-300",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "jsx-6a3947a052dc4998 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto",
                            children: a.map((e, t) =>
                              (0, n.jsx)(
                                B,
                                { person: e, index: t, type: "groomsman" },
                                e.id || e.name,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, n.jsx)(H(), {
                  id: "6a3947a052dc4998",
                  children:
                    ".perspective-1000{perspective:1e3px}.backface-hidden{-webkit-backface-visibility:hidden;backface-visibility:hidden}.scrollbar-thin::-webkit-scrollbar{width:3px}.scrollbar-thin::-webkit-scrollbar-track{background:transparent}.scrollbar-thin::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:10px}",
                }),
              ],
            })
          : null;
      }
      var F = a(43579),
        R = a(2783),
        W = a(24309),
        G = a(61475),
        O = a(38067),
        Q = a(67657),
        U = a(99576),
        Y = a(75558),
        K = a(76429),
        X = a(57830),
        Z = a(92253),
        $ = a(53380);
      let J = [
          {
            time: "09:00",
            title: "Lễ Vu Quy",
            location: "Nh\xe0 G\xe1i - Quận Ba Đ\xecnh, H\xe0 Nội",
            description: "Nghi lễ truyền thống tại gia đ\xecnh nh\xe0 g\xe1i",
            icon: F.A,
          },
          {
            time: "11:00",
            title: "Lễ Th\xe0nh H\xf4n",
            location: "Nh\xe0 Trai - Quận Cầu Giấy, H\xe0 Nội",
            description: "Nghi lễ rước d\xe2u v\xe0 lễ cưới ch\xednh thức",
            icon: F.A,
          },
          {
            time: "12:00",
            title: "Tiệc Cưới",
            location: "Trung T\xe2m Tiệc Cưới White Palace",
            description: "Tiệc mừng c\xf9ng gia đ\xecnh v\xe0 bạn b\xe8",
            icon: R.A,
          },
          {
            time: "18:00",
            title: "Tiệc Tối & \xc2m Nhạc",
            location: "Trung T\xe2m Tiệc Cưới White Palace",
            description: "Gala dinner với chương tr\xecnh văn nghệ đặc sắc",
            icon: W.A,
          },
        ],
        ee = {
          Church: F.A,
          Utensils: R.A,
          Music: W.A,
          Camera: G.A,
          UtensilsCrossed: O.A,
          Gem: Q.A,
          Gift: U.A,
          Flower2: Y.A,
          PartyPopper: K.A,
          MdTableRestaurant: X.TG5,
          GiRingBox: Z.sV3,
          LuFlower2: $.zZC,
        };
      function et(e) {
        let { events: t, weddingDate: a, lang: s = "vi" } = e,
          r = (0, i.useRef)(null),
          o = (0, z.W)(r, { once: !0, margin: "-100px" }),
          c = (null != t ? t : J).filter((e) => {
            var t, a, n, i;
            return (
              (null == (t = e.title) ? void 0 : t.trim()) ||
              (null == (a = e.time) ? void 0 : a.trim()) ||
              (null == (n = e.location) ? void 0 : n.trim()) ||
              (null == (i = e.description) ? void 0 : i.trim())
            );
          });
        return 0 === c.length
          ? null
          : (0, n.jsx)("section", {
              className: "bg-secondary/50 py-10 md:py-20",
              ref: r,
              children: (0, n.jsxs)("div", {
                className: "mx-auto max-w-4xl px-6",
                children: [
                  (0, n.jsxs)(l.P.div, {
                    initial: { opacity: 0, y: 40 },
                    animate: o ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8 },
                    className: "mb-16 text-center",
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "mb-3 text-sm uppercase tracking-[0.3em] text-primary",
                        children:
                          "en" === s
                            ? (0, d.t)(d.M9.subtitle, "en")
                            : "ko" === s
                              ? (0, d.t)(d.M9.subtitle, "ko")
                              : "Lịch tr\xecnh",
                      }),
                      (0, n.jsx)("h2", {
                        className:
                          "font-serif text-4xl text-foreground md:text-5xl text-text-main",
                        children:
                          "en" === s
                            ? (0, d.t)(d.M9.title, "en")
                            : "ko" === s
                              ? (0, d.t)(d.M9.title, "ko")
                              : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    "Timeline",
                                    " ",
                                    (0, n.jsx)("span", {
                                      className: "block min-[425px]:inline",
                                      children: "sự kiện cưới",
                                    }),
                                  ],
                                }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2",
                      }),
                      c.map((e, t) => {
                        var a, i, s, r;
                        let o =
                          "string" == typeof e.icon
                            ? null != (i = ee[e.icon])
                              ? i
                              : e.icon
                            : null !=
                                (r =
                                  null != (s = e.icon)
                                    ? s
                                    : null == (a = J[t])
                                      ? void 0
                                      : a.icon)
                              ? r
                              : F.A;
                        return (0, n.jsx)(
                          l.P.div,
                          {
                            initial: { opacity: 0, y: 30, scale: 0.95 },
                            whileInView: { opacity: 1, y: 0, scale: 1 },
                            viewport: { once: !0, amount: 0.25 },
                            transition: { duration: 0.7 },
                            className: "relative mb-5 last:mb-0 ".concat(
                              t % 2 == 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto",
                            ),
                            children: (0, n.jsxs)("div", {
                              className: "flex items-start gap-6 ".concat(
                                t % 2 == 0
                                  ? "md:flex-row"
                                  : "md:flex-row-reverse",
                              ),
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg",
                                  children:
                                    "string" == typeof o
                                      ? (0, n.jsx)("span", {
                                          className: "text-xl",
                                          children: o,
                                        })
                                      : (0, n.jsx)(o, { className: "h-5 w-5" }),
                                }),
                                (0, n.jsxs)(l.P.div, {
                                  whileHover: { scale: 1.02 },
                                  className:
                                    "flex-1 rounded-lg bg-card p-4 shadow-sm transition-shadow hover:shadow-md ".concat(
                                      t % 2 == 0
                                        ? "md:text-right"
                                        : "md:text-left",
                                    ),
                                  children: [
                                    (0, n.jsx)("span", {
                                      className:
                                        "mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary",
                                      children: e.time,
                                    }),
                                    (0, n.jsx)("h3", {
                                      className:
                                        "mb-2 font-serif md:text-xl text-base text-foreground",
                                      children: e.title,
                                    }),
                                    (0, n.jsx)("p", {
                                      className:
                                        "mb-1 text-sm font-medium text-muted-foreground",
                                      children: e.location,
                                    }),
                                    (0, n.jsx)("p", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t,
                        );
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      var ea = a(83410),
        en = a(13692),
        ei = a(75878),
        es = a(86056);
      let el = [
        {
          title: "Lễ Vu Quy",
          time: "09:00 - 10:30",
          address: "Số 45, Đường Phan Đ\xecnh Ph\xf9ng",
          area: "Quận Ba Đ\xecnh, H\xe0 Nội",
          mapUrl: "https://maps.google.com",
          icon: "\uD83C\uDFE0",
          image: "",
          lunarDay: "",
        },
        {
          title: "Lễ Th\xe0nh H\xf4n & Tiệc Cưới",
          time: "11:00 - 14:00",
          address: "Trung T\xe2m Tiệc Cưới White Palace",
          area: "123 Đường L\xe1ng, Quận Đống Đa, H\xe0 Nội",
          mapUrl: "https://maps.google.com",
          icon: "\uD83D\uDC92",
          image: "",
          lunarDay: "",
        },
      ];
      function er(e) {
        var t;
        let {
            venues: a,
            dressColors: s,
            lang: r = "vi",
            dressCodeDescription: o = "",
          } = e,
          c = (0, i.useRef)(null),
          u = (0, z.W)(c, { once: !0, margin: "-100px" });
        return (0, n.jsx)("section", {
          id: "timeline",
          className: "bg-secondary/50 py-10 md:py-20",
          ref: c,
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-6xl px-6",
            children: [
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 40 },
                animate: u ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "mb-16 text-center",
                children: [
                  (0, n.jsx)("p", {
                    className:
                      "mb-3 text-sm uppercase tracking-[0.3em] text-primary",
                    children:
                      "en" === r
                        ? d.Q$.schedule.en
                        : "ko" === r
                          ? d.Q$.schedule.ko
                          : "Lịch Tr\xecnh",
                  }),
                  (0, n.jsxs)("h2", {
                    className:
                      "font-serif text-4xl text-foreground md:text-5xl text-text-main",
                    children: [
                      "en" === r
                        ? d.Q$.specialDay.en
                        : "ko" === r
                          ? d.Q$.specialDay.ko
                          : "Ng\xe0y Trọng Đại",
                      " ",
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "flex flex-wrap gap-8 justify-center",
                children: (a || el).map((e, t) => {
                  var a;
                  return (0, n.jsxs)(
                    l.P.div,
                    {
                      initial: { opacity: 0, y: 40 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, amount: 0.2 },
                      transition: { duration: 0.8, delay: 0.15 * t },
                      whileHover: { y: -8 },
                      className:
                        "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] overflow-hidden rounded-xl bg-card shadow-lg",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "relative h-80 md:h-68 overflow-hidden",
                          children: [
                            (0, n.jsx)(m.default, {
                              src: e.image,
                              alt: e.title,
                              fill: !0,
                              className: "object-cover object-center",
                              sizes: "(max-width: 768px) 100vw, 50vw",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                            (0, n.jsx)("div", {
                              className: "absolute inset-0 bg-black/10",
                            }),
                            (null == (a = e.icon) ? void 0 : a.trim()) &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)("div", {
                                  className:
                                    "absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg",
                                  children: e.icon,
                                }),
                              }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "p-6",
                          children: [
                            (0, n.jsx)("h3", {
                              className:
                                "mb-4 font-serif text-2xl text-foreground text-text-main",
                              children: e.title,
                            }),
                            (0, n.jsxs)("div", {
                              className: "space-y-3",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex items-start gap-3",
                                  children: [
                                    (0, n.jsx)(ea.A, {
                                      className:
                                        "mt-1 h-4 w-4 shrink-0 text-primary",
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("span", {
                                          className:
                                            "font-medium text-foreground",
                                          children: e.time,
                                        }),
                                        e.lunarDay &&
                                          (0, n.jsxs)("p", {
                                            className:
                                              "text-sm text-muted-foreground",
                                            children: ["(", e.lunarDay, ")"],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex items-start gap-3",
                                  children: [
                                    (0, n.jsx)(en.A, {
                                      className:
                                        "mt-1 h-4 w-4 shrink-0 text-primary",
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("p", {
                                          className:
                                            "font-medium text-foreground",
                                          children: e.address,
                                        }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: e.area,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.mapUrl &&
                              "" !== e.mapUrl.trim() &&
                              (0, n.jsxs)(l.P.a, {
                                href: e.mapUrl || "#",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: { scale: 1.02 },
                                whileTap: { scale: 0.98 },
                                className:
                                  "mt-6 flex items-center justify-center gap-2 rounded-lg border border-primary bg-transparent px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
                                children: [
                                  (0, n.jsx)(ei.A, { className: "h-4 w-4" }),
                                  "en" === r
                                    ? d.Q$.directions.en
                                    : "ko" === r
                                      ? d.Q$.directions.ko
                                      : "Chỉ đường",
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    e.title,
                  );
                }),
              }),
              ((null != (t = null == s ? void 0 : s.length) ? t : 0) > 0 ||
                (null == o ? void 0 : o.trim())) &&
                (0, n.jsxs)(l.P.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8 },
                  className:
                    "mt-12 rounded-xl bg-card p-8 text-center shadow-lg",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
                      children: (0, n.jsx)(es.A, {
                        className: "h-8 w-8 text-primary",
                      }),
                    }),
                    (0, n.jsxs)("h3", {
                      className: "font-serif text-xl text-foreground",
                      children: [
                        "en" === r
                          ? d.Q$.dressCode.en
                          : "ko" === r
                            ? d.Q$.dressCode.ko
                            : "M\xc0U TRANG PHỤC",
                        " ",
                      ],
                    }),
                    (0, n.jsx)("p", {
                      className:
                        "mt-1 text-xs tracking-widest text-muted-foreground uppercase",
                      children: "en" === r ? "" : "(Dress Code)",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-5 flex flex-wrap items-center justify-center gap-4",
                      children: [
                        null == s
                          ? void 0
                          : s.map((e, t) =>
                              (0, n.jsx)(
                                "div",
                                {
                                  className:
                                    "h-12 w-12 md:h-16 md:w-16 rounded-full transition-transform hover:scale-105",
                                  style: {
                                    backgroundColor: e,
                                    border:
                                      "#ffffff" === e.toLowerCase() ||
                                      "#fefefe" === e.toLowerCase()
                                        ? "1px solid #f0f0f0"
                                        : "none",
                                    boxShadow: "-9px 9px 12px rgba(0,0,0,0.08)",
                                  },
                                },
                                t,
                              ),
                            ),
                        o.trim() &&
                          (0, n.jsx)("p", {
                            className:
                              "mx-auto max-w-2xl whitespace-pre-line text-sm leading-7 text-muted-foreground text-justify",
                            children: o,
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      function eo(e) {
        let {
            youtubeUrl: t = "https://www.youtube.com/embed/dQw4w9WgXcQ",
            title: a,
            description: s,
            lang: r = "vi",
          } = e,
          [o, c] = (0, i.useState)(!1);
        return t && "" !== t.trim()
          ? (0, n.jsxs)("section", {
              className:
                "py-20 md:py-28 bg-foreground text-background relative overflow-hidden",
              children: [
                (0, n.jsxs)("div", {
                  className: "absolute inset-0 opacity-5",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-10 left-10 w-64 h-64 border border-current rounded-full",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute bottom-10 right-10 w-96 h-96 border border-current rounded-full",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "container mx-auto px-4 relative z-10",
                  children: [
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6 },
                      className: "text-center mb-12",
                      children: [
                        (0, n.jsx)(l.P.div, {
                          initial: { scale: 0 },
                          whileInView: { scale: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.2 },
                          className:
                            "inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 mb-6",
                          children: (0, n.jsx)("svg", {
                            className: "w-8 h-8",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                              d: "M8 5v14l11-7z",
                            }),
                          }),
                        }),
                        (0, n.jsxs)("h2", {
                          className: "font-serif text-3xl md:text-5xl mb-4",
                          children: [
                            " ",
                            null != a
                              ? a
                              : "en" === r
                                ? (0, d.t)(d.W9.title, "en")
                                : "ko" === r
                                  ? (0, d.t)(d.W9.title, "ko")
                                  : (0, d.t)(d.W9.title, "vi"),
                          ],
                        }),
                        (0, n.jsxs)("p", {
                          className:
                            "text-background/70 max-w-2xl mx-auto leading-relaxed",
                          children: [
                            null != s
                              ? s
                              : "en" === r
                                ? (0, d.t)(d.W9.description, "en")
                                : "ko" === r
                                  ? (0, d.t)(d.W9.description, "ko")
                                  : (0, d.t)(d.W9.description, "vi"),
                            " ",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, scale: 0.95 },
                      whileInView: { opacity: 1, scale: 1 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6, delay: 0.3 },
                      className: "max-w-4xl mx-auto",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/20",
                          children: [
                            !o &&
                              (0, n.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center bg-background/5",
                                children: (0, n.jsxs)("div", {
                                  className: "flex flex-col items-center gap-4",
                                  children: [
                                    (0, n.jsx)(l.P.div, {
                                      animate: { rotate: 360 },
                                      transition: {
                                        duration: 1,
                                        repeat: 1 / 0,
                                        ease: "linear",
                                      },
                                      className:
                                        "w-10 h-10 border-2 border-background/30 border-t-background rounded-full",
                                    }),
                                    (0, n.jsxs)("span", {
                                      className: "text-sm text-background/50",
                                      children: [
                                        "en" === r
                                          ? (0, d.t)(d.W9.loading, "en")
                                          : "ko" === r
                                            ? (0, d.t)(d.W9.loading, "ko")
                                            : (0, d.t)(d.W9.loading, "vi"),
                                        "...",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            (0, n.jsx)("iframe", {
                              src: t,
                              title: "Wedding Video",
                              allow:
                                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowFullScreen: !0,
                              onLoad: () => c(!0),
                              className:
                                "absolute inset-0 w-full h-full transition-opacity duration-500 ".concat(
                                  o ? "opacity-100" : "opacity-0",
                                ),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute inset-0 pointer-events-none border border-background/10 rounded-2xl",
                            }),
                          ],
                        }),
                        (0, n.jsxs)(l.P.p, {
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.5 },
                          className:
                            "text-center mt-6 text-background/50 text-sm italic",
                          children: [
                            "“",
                            "en" === r
                              ? (0, d.t)(d.W9.quote, "en")
                              : "ko" === r
                                ? (0, d.t)(d.W9.quote, "ko")
                                : (0, d.t)(d.W9.quote, "vi"),
                            "”",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex justify-center gap-2 mt-10",
                      children: [void 0, void 0, void 0].map((e, t) =>
                        (0, n.jsx)(
                          l.P.svg,
                          {
                            initial: { opacity: 0, scale: 0 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: !0 },
                            transition: { duration: 0.3, delay: 0.6 + 0.1 * t },
                            className: "w-4 h-4 text-background/30",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                              d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      function ec(e) {
        let {
            weddingDate: t = "2026-12-12T09:00:00",
            city: a,
            countdownImage: s,
            showSeconds: r = !0,
            groomWeddingDate: o,
            brideWeddingDate: c,
            lang: m = "vi",
          } = e,
          u = (0, i.useRef)(null),
          x = (0, z.W)(u, { once: !0, margin: "-100px" }),
          [h, p] = (0, i.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          }),
          g = [
            o && { label: "Nh\xe0 G\xe1i", date: o },
            c && { label: "Nh\xe0 Trai", date: c },
          ]
            .filter(Boolean)
            .sort(
              (e, t) =>
                (0, T.Zj)(e.date).getTime() - (0, T.Zj)(t.date).getTime(),
            ),
          v = new Date().getTime(),
          f =
            g.length > 0
              ? g.reduce((e, t) => {
                  let a = (0, T.Zj)(e.date).getTime() - v,
                    n = (0, T.Zj)(t.date).getTime() - v;
                  return (n > 0 ? n : 1 / 0) < (a > 0 ? a : 1 / 0) ? t : e;
                })
              : null,
          b = (null == f ? void 0 : f.date) || o || c || t;
        (0, i.useEffect)(() => {
          let e = (0, T.Zj)(b),
            t = () => {
              let t = e.getTime() - new Date().getTime();
              t > 0 &&
                p({
                  days: Math.floor(t / 864e5),
                  hours: Math.floor((t / 36e5) % 24),
                  minutes: Math.floor((t / 1e3 / 60) % 60),
                  seconds: Math.floor((t / 1e3) % 60),
                });
            };
          t();
          let a = setInterval(t, 1e3);
          return () => clearInterval(a);
        }, [b]);
        let j = [
          { value: h.days, label: d.Ii.labels.days[m] },
          { value: h.hours, label: d.Ii.labels.hours[m] },
          { value: h.minutes, label: d.Ii.labels.minutes[m] },
          ...(r ? [{ value: h.seconds, label: d.Ii.labels.seconds[m] }] : []),
        ];
        return (0, n.jsxs)("section", {
          className: "relative py-20 md:py-32",
          ref: u,
          children: [
            (0, n.jsx)("div", {
              className: "absolute inset-0 bg-cover bg-center",
              style: { backgroundImage: "url('".concat(s, "')") },
              children: (0, n.jsx)("div", {
                className: "absolute inset-0 bg-black/60",
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "relative z-10 mx-auto max-w-4xl px-6 text-center text-white",
              children: [
                (0, n.jsxs)(l.P.div, {
                  initial: { opacity: 0, y: 40 },
                  animate: x ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8 },
                  children: [
                    (0, n.jsx)("p", {
                      className:
                        "mb-3 text-sm uppercase tracking-[0.3em] text-white/80",
                      children: "Save the date",
                    }),
                    (0, n.jsx)("h2", {
                      className: "mb-8 font-serif text-4xl md:text-5xl",
                      children:
                        "en" === m
                          ? d.Ii.title.en
                          : "ko" === m
                            ? d.Ii.title.ko
                            : (0, n.jsx)(n.Fragment, {
                                children: "Đếm Ngược Đến Ng\xe0y Cưới",
                              }),
                    }),
                  ],
                }),
                (0, n.jsx)(l.P.div, {
                  initial: { opacity: 0, y: 40 },
                  animate: x ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "grid gap-4 md:gap-8 ".concat(
                    r
                      ? "grid-cols-2 md:grid-cols-4"
                      : "grid-cols-3 max-w-2xl mx-auto",
                  ),
                  children: j.map((e, t) =>
                    (0, n.jsxs)(
                      l.P.div,
                      {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: x ? { opacity: 1, scale: 1 } : {},
                        transition: { duration: 0.5, delay: 0.3 + 0.1 * t },
                        className:
                          "rounded-lg bg-white/10 p-6 backdrop-blur-sm",
                        children: [
                          (0, n.jsx)(l.P.span, {
                            initial: { scale: 1 },
                            animate: { scale: 1 },
                            transition: { duration: 0.2 },
                            className:
                              "block font-serif text-4xl font-bold md:text-5xl tabular-nums",
                            children: e.value.toString().padStart(2, "0"),
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "mt-2 block text-sm uppercase tracking-widest text-white/80",
                            children: e.label,
                          }),
                        ],
                      },
                      e.label,
                    ),
                  ),
                }),
                (0, n.jsx)(l.P.div, {
                  initial: { opacity: 0 },
                  animate: x ? { opacity: 1 } : {},
                  transition: { duration: 0.8, delay: 0.8 },
                  className:
                    "mt-10 font-serif italic text-white/90 text-center ".concat(
                      g.length > 1 ? "text-[17px] md:text-xl" : "text-xl",
                    ),
                  children:
                    g.length > 1
                      ? (0, n.jsx)("div", {
                          className: "space-y-1",
                          children: g.map((e) =>
                            (0, n.jsxs)(
                              "p",
                              {
                                children: [
                                  e.label,
                                  " • ",
                                  (0, T.af)(e.date, m),
                                ],
                              },
                              e.label,
                            ),
                          ),
                        })
                      : (0, n.jsxs)("p", {
                          children: [
                            (0, n.jsx)("span", { children: (0, T.af)(b, m) }),
                            (0, n.jsx)("span", {
                              className: "hidden sm:inline",
                              children: " • ",
                            }),
                            (0, n.jsxs)("span", {
                              className: "block sm:inline sm:ml-0",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "sm:hidden",
                                  children: "• ",
                                }),
                                a,
                              ],
                            }),
                          ],
                        }),
                }),
              ],
            }),
          ],
        });
      }
      var ed = a(58144);
      function em(e) {
        let { item: t, active: a } = e,
          [s, r] = (0, i.useState)(!1),
          o = t.message.length > 140;
        return (0, n.jsxs)(l.P.div, {
          whileHover: { y: -8 },
          animate: {
            boxShadow: a
              ? "0 20px 40px rgba(0,0,0,0.12)"
              : "0 10px 20px rgba(0,0,0,0.05)",
          },
          className:
            " relative rounded-xl bg-card p-8 shadow-lg min-h-[280px] transition-all duration-300 ease-out group ",
          children: [
            (0, n.jsx)("div", {
              className: "absolute -top-4 left-6",
              children: (0, n.jsx)("div", {
                className:
                  "flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg transition-transform duration-300 group-hover:scale-110",
                children: (0, n.jsx)(ed.A, {
                  className: "h-5 w-5 text-primary-foreground",
                }),
              }),
            }),
            (0, n.jsx)("p", {
              className:
                " mb-6 mt-4 text-base leading-relaxed italic text-muted-foreground transition-colors duration-300 group-hover:text-foreground ",
              children: s || !o ? t.message : t.message.slice(0, 90) + "...",
            }),
            o &&
              (0, n.jsx)("button", {
                onClick: () => r(!s),
                className:
                  " text-xs text-primary hover:underline transition-all duration-200 group-hover:tracking-wide ",
                children: s ? "Thu gọn" : "Xem th\xeam",
              }),
            (0, n.jsx)("div", {
              className: "mt-4 border-t border-border pt-4",
              children: (0, n.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "font-medium text-foreground transition-colors",
                        children: t.name,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: t.relationship,
                      }),
                    ],
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[11px] text-muted-foreground/70 whitespace-nowrap",
                    children: (0, T.Yq)(t.createdAt),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function eu(e) {
        let { refreshKey: t, weddingId: a, coverImage: s, lang: r = "vi" } = e,
          o = (0, i.useRef)(null),
          c = (0, z.W)(o, { once: !0 }),
          m = (0, i.useRef)(null),
          [u, x] = (0, i.useState)(!1),
          [h, p] = (0, i.useState)([]),
          [g, v] = (0, i.useState)([]),
          [f, b] = (0, i.useState)(1),
          [j, y] = (0, i.useState)(!0),
          [N, w] = (0, i.useState)(!1),
          [k, C] = (0, i.useState)(0),
          P = async function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (N) return;
            w(!0);
            let n = await fetch(
                "/api/rsvp?weddingId="
                  .concat(a, "&page=")
                  .concat(e, "&limit=10"),
              ),
              i = await n.json();
            (v((e) => (t ? i.data : [...e, ...i.data])), y(i.hasMore), w(!1));
          },
          [S, I] = (0, i.useState)(0),
          D = async () => {
            let e = await fetch(
                "/api/rsvp?weddingId=".concat(a, "&page=1&limit=3"),
              ),
              t = await e.json();
            (p(t.data), C(t.total));
          };
        return (
          (0, i.useEffect)(() => {
            document.body.style.overflow = u ? "hidden" : "auto";
          }, [u]),
          (0, i.useEffect)(() => {
            (D(), v([]), b(1), y(!0));
          }, [t, a]),
          (0, i.useEffect)(() => {
            if (h.length < 2) return;
            let e = setInterval(() => {
              I((e) => (e + 1) % Math.min(3, h.length));
            }, 2e3);
            return () => clearInterval(e);
          }, [h.length]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("section", {
                id: "wishes",
                ref: o,
                className: "py-20 md:py-32 bg-secondary/50",
                children: (0, n.jsxs)("div", {
                  className: "mx-auto max-w-6xl px-6",
                  children: [
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, y: 30 },
                      animate: c ? { opacity: 1, y: 0 } : {},
                      className: "text-center mb-12",
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "text-sm uppercase tracking-[0.3em] text-primary",
                          children:
                            "en" === r
                              ? d.U1.subtitle.en
                              : "ko" === r
                                ? d.U1.subtitle.ko
                                : "Lời ch\xfac",
                        }),
                        (0, n.jsx)("h2", {
                          className:
                            "text-4xl md:text-5xl font-serif leading-[1.35] text-text-main",
                          children:
                            "en" === r
                              ? d.U1.title.en
                              : "ko" === r
                                ? d.U1.title.ko
                                : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      "Những Lời Ch\xfac",
                                      " ",
                                      (0, n.jsx)("span", {
                                        className: "block min-[768px]:inline",
                                        children: "Tốt Đẹp",
                                      }),
                                    ],
                                  }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "grid md:grid-cols-3 gap-6",
                      children: h.map((e, t) =>
                        (0, n.jsx)(
                          l.P.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: {
                              opacity: +!!c,
                              y: 20 * !c,
                              scale: S === t ? 1.03 : 1,
                              translateY: S === t ? -12 : 0,
                            },
                            transition: {
                              opacity: { duration: 0.6 },
                              y: { duration: 0.6 },
                              scale: { duration: 0.5 },
                              translateY: { duration: 0.5 },
                            },
                            children: (0, n.jsx)(em, {
                              item: e,
                              active: S === t,
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-8 flex flex-col items-center gap-3",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: async () => {
                            (x(!0), 0 === g.length && (b(1), await P(1, !0)));
                          },
                          className:
                            " cursor-pointer rounded-full bg-primary px-6 py-3 text-sm text-white shadow transition-all duration-300 ease-out hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 ",
                          children:
                            "en" === r
                              ? "".concat(d.U1.viewAll.en, " (").concat(k, ")")
                              : "ko" === r
                                ? ""
                                    .concat(d.U1.viewAll.ko, " (")
                                    .concat(k, ")")
                                : "XEM TẤT CẢ (".concat(k, ")"),
                        }),
                        (0, n.jsxs)("button", {
                          onClick: () => {
                            var e;
                            null == (e = document.getElementById("rsvp")) ||
                              e.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            " cursor-pointer inline-flex items-center gap-2 text-sm text-primary transition-opacity duration-300 hover:opacity-80 ",
                          children: [
                            (0, n.jsx)(l.P.span, {
                              animate: { y: [0, -2, 0], rotate: [-5, 5, -5] },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: "✨",
                            }),
                            (0, n.jsx)(l.P.span, {
                              animate: { y: [0, -1.5, 0] },
                              transition: {
                                duration: 2.2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              className: "underline",
                              children:
                                "en" === r
                                  ? d.U1.sendWish.en
                                  : "ko" === r
                                    ? d.U1.sendWish.ko
                                    : "Gửi lời ch\xfac cho c\xf4 d\xe2u ch\xfa rể",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              u &&
                (0, n.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4",
                  onClick: (e) => {
                    m.current && !m.current.contains(e.target) && x(!1);
                  },
                  children: (0, n.jsxs)("div", {
                    ref: m,
                    className:
                      "w-full max-w-6xl h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl flex relative",
                    children: [
                      (0, n.jsx)("button", {
                        onClick: () => x(!1),
                        className:
                          "cursor-pointer absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60",
                        children: "✕",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          " hidden md:block relative flex-[0_0_60%] max-w-[580px] h-full overflow-hidden text-center ",
                        children: [
                          (0, n.jsx)("img", {
                            src: s,
                            className: "w-full h-full object-cover",
                          }),
                          (0, n.jsx)("div", {
                            className: "absolute inset-0 bg-black/10",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex-1 min-w-0 bg-background flex flex-col h-full overflow-hidden",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "shrink-0 bg-background p-6 border-b border-border/40",
                            children: [
                              (0, n.jsx)("h2", {
                                className: "text-xl font-serif",
                                children:
                                  "en" === r
                                    ? "\uD83D\uDC8C ".concat(d.U1.subtitle.en)
                                    : "ko" === r
                                      ? "\uD83D\uDC8C ".concat(d.U1.subtitle.ko)
                                      : "\uD83D\uDC8C Lời ch\xfac",
                              }),
                              (0, n.jsx)("p", {
                                className: "text-xs text-muted-foreground mt-1",
                                children:
                                  "en" === r
                                    ? d.U1.total.en(k)
                                    : "ko" === r
                                      ? d.U1.total.ko(k)
                                      : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                            "Tổng cộng ",
                                            (0, n.jsx)("strong", {
                                              children: k,
                                            }),
                                            " lời ch\xfac • Cuộn xuống để xem th\xeam",
                                          ],
                                        }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            onScroll: (e) => {
                              let t = e.currentTarget;
                              if (
                                t.scrollTop + t.clientHeight >=
                                  t.scrollHeight - 50 &&
                                j &&
                                !N
                              ) {
                                let e = f + 1;
                                (b(e), P(e));
                              }
                            },
                            children: [
                              g.map((e, t) =>
                                (0, n.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "mb-4 p-4 rounded-xl bg-card shadow-sm",
                                    children: [
                                      (0, n.jsx)("p", {
                                        className:
                                          "text-sm italic leading-relaxed",
                                        children: e.message,
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "my-3 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "flex items-end justify-between gap-3",
                                        children: [
                                          (0, n.jsxs)("div", {
                                            children: [
                                              (0, n.jsx)("p", {
                                                className:
                                                  "text-sm font-semibold text-foreground",
                                                children: e.name,
                                              }),
                                              (0, n.jsx)("p", {
                                                className:
                                                  "mt-1 text-xs text-muted-foreground",
                                                children: e.relationship,
                                              }),
                                            ],
                                          }),
                                          e.createdAt &&
                                            (0, n.jsx)("p", {
                                              className:
                                                "shrink-0 text-[11px] text-muted-foreground",
                                              children: (0, T.Yq)(e.createdAt),
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                              N &&
                                (0, n.jsx)("p", {
                                  className:
                                    "text-center text-xs text-muted-foreground py-4",
                                  children:
                                    "en" === r
                                      ? d.U1.loading.en
                                      : "Đang tải...",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      var ex = a(25352),
        eh = a(67081);
      let ep = [
        {
          bankName: "Vietcombank",
          accountNumber: "1234567890123",
          accountHolder: "NGUYEN ANH TUAN NGOC",
          qr: "/qr-groom.png",
        },
        {
          bankName: "Techcombank",
          accountNumber: "9876543210987",
          accountHolder: "NGUYEN THI THUY TRINH",
          qr: "/qr-bride.png",
        },
      ];
      function eg(e) {
        let {
            accounts: t,
            brideImage: a,
            groomImage: s,
            side: r,
            lang: o = "vi",
          } = e,
          c = (0, i.useRef)(null),
          u = (0, z.W)(c, { once: !0, margin: "-100px" }),
          x = (t || ep)
            .map((e, t) => ({ ...e, originalIndex: t }))
            .filter((e) => {
              var t, a, n, i;
              return (
                (null == (t = e.bankName) ? void 0 : t.trim()) ||
                (null == (a = e.accountNumber) ? void 0 : a.trim()) ||
                (null == (n = e.accountHolder) ? void 0 : n.trim()) ||
                (null == (i = e.qr) ? void 0 : i.trim())
              );
            });
        if (0 === x.length) return null;
        let h = "groom" === r ? [...x].reverse() : x,
          [p, g] = (0, i.useState)(null),
          [v, f] = (0, i.useState)(null);
        return (0, n.jsx)("section", {
          className: "py-20 md:py-32 bg-secondary/50",
          ref: c,
          id: "wedding-gift",
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-4xl px-6",
            children: [
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 40 },
                animate: u ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "mb-16 text-center",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
                    children: (0, n.jsx)(U.A, {
                      className: "h-8 w-8 text-primary",
                    }),
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "mb-3 text-sm uppercase tracking-[0.3em] text-primary",
                    children:
                      "en" === o
                        ? (0, d.t)(d.nC.subtitle, "en")
                        : "ko" === o
                          ? (0, d.t)(d.nC.subtitle, "ko")
                          : "Mừng Cưới",
                  }),
                  (0, n.jsx)("h2", {
                    className: "font-serif text-4xl md:text-5xl text-text-main",
                    children:
                      "en" === o
                        ? (0, d.t)(d.nC.title, "en")
                        : "ko" === o
                          ? (0, d.t)(d.nC.title, "ko")
                          : "Hộp Mừng Cưới",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "grid gap-6 ".concat(
                  1 === h.length
                    ? "grid-cols-1 place-items-center"
                    : "md:grid-cols-2",
                ),
                children: h.map((e, t) =>
                  (0, n.jsx)(
                    l.P.div,
                    {
                      initial: { opacity: 0, y: 40 },
                      animate: u ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.8, delay: 0.2 * t },
                      className: "perspective w-full max-w-md",
                      children: (0, n.jsxs)("div", {
                        onClick: () => {
                          g((e) => (e === t ? null : t));
                        },
                        className:
                          "relative h-[260px] w-full cursor-pointer transition-transform duration-700 transform-style preserve-3d ".concat(
                            p === t ? "rotate-y-180" : "",
                          ),
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "absolute inset-0 backface-hidden rounded-xl bg-card shadow-lg overflow-hidden",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center gap-4 border-b bg-muted/50 p-4",
                                children: [
                                  a &&
                                    (0, n.jsx)("div", {
                                      className:
                                        "relative h-12 w-12 overflow-hidden rounded-full border border-border",
                                      children: (0, n.jsx)(m.default, {
                                        src: 0 === e.originalIndex ? a : s,
                                        alt: "",
                                        fill: !0,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      }),
                                    }),
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("h3", {
                                        className: "font-medium",
                                        children: e.bankName,
                                      }),
                                      (0, n.jsx)("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children:
                                          0 === e.originalIndex
                                            ? "en" === o
                                              ? (0, d.t)(d.nC.bride, "en")
                                              : "ko" === o
                                                ? (0, d.t)(d.nC.bride, "ko")
                                                : "C\xf4 d\xe2u"
                                            : "en" === o
                                              ? (0, d.t)(d.nC.groom, "en")
                                              : "ko" === o
                                                ? (0, d.t)(d.nC.groom, "ko")
                                                : "Ch\xfa rể",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: "p-6",
                                children: [
                                  (0, n.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children:
                                      "en" === o
                                        ? (0, d.t)(d.nC.accountNumber, "en")
                                        : "ko" === o
                                          ? (0, d.t)(d.nC.accountNumber, "ko")
                                          : "Số t\xe0i khoản",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, n.jsx)("p", {
                                        className:
                                          "font-mono text-lg font-medium",
                                        children: e.accountNumber,
                                      }),
                                      (0, n.jsx)("button", {
                                        onClick: (a) => {
                                          var n;
                                          (a.stopPropagation(),
                                            (n = e.accountNumber),
                                            navigator.clipboard.writeText(n),
                                            f(t),
                                            setTimeout(() => f(null), 2e3));
                                        },
                                        className:
                                          "flex h-8 w-8 items-center justify-center rounded-lg bg-muted hover:bg-muted/80",
                                        children:
                                          v === t
                                            ? (0, n.jsx)(ex.A, {
                                                className:
                                                  "h-4 w-4 text-green-600",
                                              })
                                            : (0, n.jsx)(eh.A, {
                                                className:
                                                  "h-4 w-4 text-muted-foreground",
                                              }),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "mt-4 text-sm text-muted-foreground",
                                    children:
                                      "en" === o
                                        ? (0, d.t)(d.nC.accountHolder, "en")
                                        : "ko" === o
                                          ? (0, d.t)(d.nC.accountHolder, "ko")
                                          : "Chủ t\xe0i khoản",
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "font-medium",
                                    children: e.accountHolder,
                                  }),
                                  e.qr &&
                                    (0, n.jsx)("p", {
                                      className:
                                        "mt-4 text-xs text-muted-foreground",
                                      children:
                                        "en" === o
                                          ? "\uD83D\uDC49 ".concat(
                                              (0, d.t)(d.nC.viewQr, "en"),
                                            )
                                          : "ko" === o
                                            ? "\uD83D\uDC49 ".concat(
                                                (0, d.t)(d.nC.viewQr, "ko"),
                                              )
                                            : "\uD83D\uDC49 Bấm để xem m\xe3 QR",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "absolute inset-0 rotate-y-180 backface-hidden rounded-xl bg-card shadow-lg flex flex-col items-center justify-center p-6",
                            children: [
                              (0, n.jsx)("p", {
                                className: "mb-4 text-sm text-muted-foreground",
                                children:
                                  "en" === o
                                    ? (0, d.t)(d.nC.scanQr, "en")
                                    : "ko" === o
                                      ? (0, d.t)(d.nC.scanQr, "ko")
                                      : "Qu\xe9t m\xe3 để mừng cưới",
                              }),
                              (0, n.jsx)(m.default, {
                                src: e.qr,
                                alt: "QR Code",
                                width: 160,
                                height: 160,
                                className: "rounded-lg border bg-white p-2",
                                unoptimized: !0,
                              }),
                              (0, n.jsx)("p", {
                                className: "mt-4 text-xs text-muted-foreground",
                                children:
                                  "en" === o
                                    ? "\uD83D\uDC49 ".concat(
                                        (0, d.t)(d.nC.back, "en"),
                                      )
                                    : "ko" === o
                                      ? "\uD83D\uDC49 ".concat(
                                          (0, d.t)(d.nC.back, "ko"),
                                        )
                                      : "\uD83D\uDC49 Bấm để quay lại",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.accountNumber,
                  ),
                ),
              }),
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 20 },
                animate: u ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8, delay: 0.6 },
                className:
                  "mt-12 flex items-center justify-center gap-2 text-muted-foreground",
                children: [
                  (0, n.jsx)(A.A, {
                    className: "h-4 w-4 fill-primary text-primary",
                  }),
                  (0, n.jsx)("span", {
                    children:
                      "en" === o
                        ? (0, d.t)(d.nC.footer, "en")
                        : "ko" === o
                          ? (0, d.t)(d.nC.footer, "ko")
                          : "Cảm ơn Qu\xfd kh\xe1ch đ\xe3 y\xeau thương v\xe0 ch\xfac ph\xfac cho gia đ\xecnh ch\xfang t\xf4i",
                  }),
                  (0, n.jsx)(A.A, {
                    className: "h-4 w-4 fill-primary text-primary",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var ev = a(89840),
        ef = a(56407),
        eb = a(85080);
      function ej(e) {
        var t, a, s, r, o, c, u, x, h;
        let {
            weddingId: p,
            onSuccess: g,
            theme: v,
            people: f,
            brideName: b,
            groomName: j,
            thankYouImage: y,
            side: N,
            lang: w = "vi",
            wishesFirstInForm: k = !0,
            features: C,
          } = e,
          P = null == (u = null == C ? void 0 : C.showRSVPField) || u,
          S = null == (x = null == C ? void 0 : C.showInvitedBy) || x,
          I = null == (h = null == C ? void 0 : C.showNickname) || h,
          [D, V] = (0, i.useState)(!1),
          _ = (0, i.useRef)(null),
          E = (0, i.useRef)(null),
          L = (0, i.useRef)(null),
          [M, H] = (0, i.useState)(!1),
          B = (0, z.W)(E, { once: !0, margin: "-100px" }),
          [q, F] = (0, i.useState)(!1),
          [R, W] = (0, i.useState)({
            name: "",
            nickname: "",
            invitedBy: "",
            guests: "",
            attending: "",
            message: "",
          }),
          G = async (e) => {
            if ((e.preventDefault(), D)) return;
            let t = [];
            if (
              (R.message || t.push("message"),
              R.name || t.push("name"),
              S && !R.invitedBy && t.push("invitedBy"),
              P && !R.attending && t.push("attending"),
              P && "yes" === R.attending && !R.guests && t.push("guests"),
              t.length > 0)
            )
              return void alert(
                ""
                  .concat((0, T.as)(v), " ")
                  .concat(d.w.alerts.required[w], "\n\n• ")
                  .concat(t.map((e) => d.w.fields[e][w]).join("\n• ")),
              );
            try {
              (V(!0),
                await fetch("/api/rsvp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    weddingId: p,
                    name: R.name,
                    nickname: R.nickname,
                    comingFrom: R.invitedBy,
                    attending: R.attending,
                    numberOfGuests: Number(R.guests),
                    message: R.message,
                  }),
                }),
                null == g || g(),
                F(!0),
                setTimeout(() => {
                  var e;
                  null == (e = document.getElementById("rsvp")) ||
                    e.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100));
            } catch (e) {
              console.error(e);
            } finally {
              V(!1);
            }
          };
        (0, i.useEffect)(() => {
          let e = (e) => {
            _.current && !_.current.contains(e.target) && H(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
          );
        }, []);
        let O = (e) => {
            let { name: t, value: a } = e.target;
            if ("attending" === t) {
              if ("maybe" === a || "no" === a)
                return void W({ ...R, attending: a, guests: "0" });
              if ("yes" === a)
                return void W({ ...R, attending: a, guests: "" });
            }
            W({ ...R, [t]: a });
          },
          Q = ((e, t) => {
            let a = {
                vi: "Cảm ơn"
                  .concat(t ? " ".concat(t) : "", " rất nhiều ")
                  .concat((0, T.as)(v)),
                en: "Thank you"
                  .concat(t ? " ".concat(t) : "", " so much ")
                  .concat((0, T.as)(v)),
                ko: ""
                  .concat(t ? "".concat(t, ", ") : "", "진심으로 감사드립니다 ")
                  .concat((0, T.as)(v)),
              }[w],
              n = {
                yes: { title: a, desc: d.w.thankYou.yes[w] },
                maybe: { title: a, desc: d.w.thankYou.maybe[w] },
                no: { title: a, desc: d.w.thankYou.no[w] },
              };
            return n[e] || n.yes;
          })(R.attending, R.name),
          U =
            (null == (a = f.find((e) => "groom" === e.value)) ||
            null == (t = a.img)
              ? void 0
              : t.trim()) || "",
          Y =
            (null == (r = f.find((e) => "bride" === e.value)) ||
            null == (s = r.img)
              ? void 0
              : s.trim()) || "",
          K =
            (null == (c = f.find((e) => "both" === e.value)) ||
            null == (o = c.img)
              ? void 0
              : o.trim()) ||
            Y ||
            U,
          X =
            "w-full rounded-xl border border-border-input bg-cream px-4 py-3 text-color-input placeholder:text-[#b8b1a8] focus:outline-none focus:ring-2 focus:ring-focus-ring/40 focus:border-focus-ring transition",
          Z = (0, n.jsxs)("div", {
            className: "md:col-span-2",
            children: [
              (0, n.jsx)("label", {
                className: "mb-2 block text-sm font-medium",
                children:
                  "en" === w
                    ? d.w.messageLabel.en
                    : "ko" === w
                      ? d.w.messageLabel.ko
                      : "Lời Ch\xfac",
              }),
              (0, n.jsxs)("div", {
                className: "relative",
                children: [
                  (0, n.jsx)("textarea", {
                    ref: L,
                    name: "message",
                    rows: 4,
                    value: R.message,
                    onChange: O,
                    className: X + " resize-none",
                    placeholder: d.w.messagePlaceholder[w],
                    required: !0,
                    onInvalid: (e) =>
                      e.currentTarget.setCustomValidity(
                        "".concat(
                          (0, T.as)(v),
                          " Bạn viết v\xe0i lời ch\xfac cho c\xf4 d\xe2u v\xe0 ch\xfa rể",
                        ),
                      ),
                    onInput: (e) => e.currentTarget.setCustomValidity(""),
                  }),
                  (0, n.jsx)("div", {
                    ref: _,
                    className: "absolute bottom-14 right-0 z-50",
                    children:
                      M &&
                      (0, n.jsx)(ef.Ay, {
                        onEmojiClick: (e) => {
                          ((e) => {
                            let t = L.current;
                            if (!t) return;
                            let a = t.selectionStart,
                              n = t.selectionEnd,
                              i = R.message,
                              s = i.substring(0, a) + e + i.substring(n);
                            (W({ ...R, message: s }),
                              setTimeout(() => {
                                (t.focus(),
                                  (t.selectionStart = t.selectionEnd =
                                    a + e.length));
                              }, 0));
                          })(e.emoji);
                        },
                        theme: ef.Sx.LIGHT,
                      }),
                  }),
                  (0, n.jsx)("button", {
                    type: "button",
                    onClick: () => H(!M),
                    className:
                      "absolute bottom-3 right-3 text-xl hover:scale-110 transition cursor-pointer",
                    title: "Ch\xe8n biểu tượng",
                    children: (0, n.jsx)(eb.A, {}),
                  }),
                ],
              }),
            ],
          }),
          $ = (0, n.jsxs)("div", {
            className: "md:col-span-2",
            children: [
              (0, n.jsx)("label", {
                className: "mb-2 block text-sm font-medium",
                children:
                  "en" === w
                    ? d.w.name.en
                    : "ko" === w
                      ? d.w.name.ko
                      : "T\xean của bạn",
              }),
              (0, n.jsx)("input", {
                name: "name",
                required: !0,
                value: R.name,
                onChange: O,
                className: X,
                placeholder:
                  "en" === w
                    ? d.w.placeholders.name.en
                    : "ko" === w
                      ? d.w.placeholders.name.ko
                      : "Nguyễn Văn Huy",
                onInvalid: (e) =>
                  e.currentTarget.setCustomValidity(
                    "".concat(
                      (0, T.as)(v),
                      " Vui l\xf2ng điền t\xean của bạn nh\xe9",
                    ),
                  ),
                onInput: (e) => e.currentTarget.setCustomValidity(""),
              }),
            ],
          }),
          J = (0, n.jsx)(n.Fragment, {
            children:
              S &&
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)("div", {
                  className: "md:col-span-2",
                  children: [
                    (0, n.jsx)("label", {
                      className: "mb-3 block text-sm font-medium",
                      children:
                        "en" === w
                          ? d.w.invitedBy.en
                          : "ko" === w
                            ? d.w.invitedBy.ko
                            : "Bạn l\xe0 kh\xe1ch mời của ai?",
                    }),
                    (0, n.jsx)("div", {
                      className: "grid grid-cols-3 gap-4",
                      children: f.map((e) => {
                        var t;
                        let a = R.invitedBy === e.value,
                          i = (null == (t = e.img) ? void 0 : t.trim()) || K;
                        return (0, n.jsxs)(
                          "button",
                          {
                            type: "button",
                            onClick: () => W({ ...R, invitedBy: e.value }),
                            className:
                              "cursor-pointer relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ".concat(
                                a
                                  ? "ring-2 ring-focus-ring scale-[1.05] z-10"
                                  : R.invitedBy
                                    ? "opacity-40 scale-95"
                                    : "hover:scale-[1.02]",
                              ),
                            children: [
                              (0, n.jsx)("img", {
                                src: i,
                                className:
                                  "absolute inset-0 h-full w-full object-cover",
                              }),
                              (0, n.jsx)("div", {
                                className: "absolute inset-0 ".concat(
                                  a ? "bg-black/25" : "bg-black/35",
                                ),
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "absolute bottom-2 left-0 right-0 text-center",
                                children: (0, n.jsx)("span", {
                                  className: "text-white text-sm font-medium",
                                  children: e.label,
                                }),
                              }),
                            ],
                          },
                          e.value,
                        );
                      }),
                    }),
                  ],
                }),
              }),
          }),
          ee = (0, n.jsx)(n.Fragment, {
            children:
              I &&
              (0, n.jsxs)("div", {
                className: "md:col-span-2",
                children: [
                  (0, n.jsx)("label", {
                    className: "mb-2 block text-sm font-medium",
                    children:
                      "en" === w
                        ? d.w.nickname.en
                        : "ko" === w
                          ? d.w.nickname.ko
                          : "Biệt danh",
                  }),
                  (0, n.jsx)("input", {
                    required: !0,
                    name: "nickname",
                    value: R.nickname,
                    onChange: O,
                    className: X,
                    placeholder:
                      "en" === w
                        ? d.w.placeholders.nickname.en
                        : "ko" === w
                          ? d.w.placeholders.nickname.ko
                          : d.w.placeholders.nickname.vi,
                    onInvalid: (e) =>
                      e.currentTarget.setCustomValidity(
                        "".concat(
                          (0, T.as)(v),
                          " Bạn nhập gi\xfap tụi m\xecnh biệt danh nh\xe9",
                        ),
                      ),
                    onInput: (e) => e.currentTarget.setCustomValidity(""),
                  }),
                ],
              }),
          }),
          et = (0, n.jsx)(n.Fragment, {
            children:
              P &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("label", {
                        className: "mb-2 block text-sm font-medium",
                        children:
                          "en" === w
                            ? d.w.attending.label.en
                            : "ko" === w
                              ? d.w.attending.label.ko
                              : "Bạn c\xf3 thể tham dự kh\xf4ng?",
                      }),
                      (0, n.jsxs)("select", {
                        name: "attending",
                        value: R.attending,
                        onChange: O,
                        className: X,
                        required: !0,
                        onInvalid: (e) =>
                          e.currentTarget.setCustomValidity(
                            "".concat(
                              (0, T.as)(v),
                              " Bạn cho tụi m\xecnh biết bạn c\xf3 thể tham dự kh\xf4ng nh\xe9",
                            ),
                          ),
                        onInput: (e) => e.currentTarget.setCustomValidity(""),
                        children: [
                          (0, n.jsx)("option", {
                            value: "",
                            disabled: !0,
                            children:
                              "en" === w
                                ? d.w.attending.placeholder.en
                                : "ko" === w
                                  ? d.w.attending.placeholder.ko
                                  : "-- Chọn c\xe2u trả lời --",
                          }),
                          (0, n.jsx)("option", {
                            value: "yes",
                            children:
                              "en" === w
                                ? "".concat(d.w.attending.options.yes.en)
                                : "ko" === w
                                  ? "".concat(d.w.attending.options.yes.ko)
                                  : "✨ Chắc chắn rồi, m\xecnh sẽ đến",
                          }),
                          (0, n.jsx)("option", {
                            value: "maybe",
                            children:
                              "en" === w
                                ? "".concat(d.w.attending.options.maybe.en)
                                : "ko" === w
                                  ? "".concat(d.w.attending.options.maybe.ko)
                                  : "\uD83E\uDD0D M\xecnh sẽ cố gắng sắp xếp",
                          }),
                          (0, n.jsx)("option", {
                            value: "no",
                            children:
                              "en" === w
                                ? "".concat(d.w.attending.options.no.en)
                                : "ko" === w
                                  ? "".concat(d.w.attending.options.no.ko)
                                  : "\uD83D\uDC8C Rất tiếc m\xecnh kh\xf4ng thể tham dự",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("label", {
                        className: "mb-2 block text-sm font-medium",
                        children:
                          "en" === w
                            ? (0, n.jsx)(n.Fragment, {
                                children: d.w.guests.label.en,
                              })
                            : "ko" === w
                              ? (0, n.jsx)(n.Fragment, {
                                  children: d.w.guests.label.ko,
                                })
                              : (0, n.jsx)(n.Fragment, {
                                  children: "Số người tham dự",
                                }),
                      }),
                      (0, n.jsxs)("select", {
                        name: "guests",
                        value: R.guests,
                        onChange: O,
                        className: ""
                          .concat(X, " ")
                          .concat(
                            "yes" !== R.attending
                              ? "opacity-60 cursor-not-allowed"
                              : "",
                          ),
                        disabled: "yes" !== R.attending,
                        required: "yes" === R.attending,
                        children: [
                          (0, n.jsx)("option", {
                            value: "",
                            disabled: !0,
                            children:
                              "en" === w
                                ? d.w.guests.placeholder.en
                                : "ko" === w
                                  ? d.w.guests.placeholder.ko
                                  : "-- Số người --",
                          }),
                          (0, n.jsx)("option", {
                            value: "1",
                            children: d.w.optionsNumber.one[w],
                          }),
                          (0, n.jsx)("option", {
                            value: "2",
                            children: d.w.optionsNumber.two[w],
                          }),
                          (0, n.jsx)("option", {
                            value: "3",
                            children: d.w.optionsNumber.three[w],
                          }),
                          (0, n.jsx)("option", {
                            value: "4",
                            children: d.w.optionsNumber.four[w],
                          }),
                          (0, n.jsx)("option", {
                            value: "5",
                            children: d.w.optionsNumber.fivePlus[w],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          });
        return (0, n.jsx)("section", {
          id: "rsvp",
          className: "py-20 md:py-32",
          ref: E,
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-3xl px-6",
            children: [
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 40 },
                animate: B ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "mb-16 text-center",
                children: [
                  P &&
                    (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsx)("p", {
                        className:
                          "mb-3 text-sm uppercase tracking-[0.3em] text-primary leading-relaxed",
                        children:
                          "en" === w
                            ? d.w.headerTop.en
                            : "ko" === w
                              ? d.w.headerTop.ko
                              : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "block md:inline",
                                      children: "Gửi Lời Ch\xfac",
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "block md:inline",
                                      children: " & X\xe1c nhận tham dự",
                                    }),
                                  ],
                                }),
                      }),
                    }),
                  (0, n.jsx)("h2", {
                    className:
                      "font-serif text-4xl md:text-5xl text-foreground leading-[1.35] text-text-main",
                    children:
                      "en" === w
                        ? d.w.title.en
                        : "ko" === w
                          ? d.w.title.ko
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                "Nhắn Gửi",
                                " ",
                                (0, n.jsx)("span", {
                                  className: "block min-[768px]:inline",
                                  children: "Y\xeau Thương",
                                }),
                              ],
                            }),
                  }),
                  (0, n.jsx)("p", {
                    className: "mt-4 text-muted-foreground",
                    children:
                      "en" === w
                        ? d.w.subtitle.en
                        : "ko" === w
                          ? d.w.subtitle.ko
                          : (0, n.jsx)(n.Fragment, {
                              children:
                                "Mỗi lời ch\xfac của Qu\xfd kh\xe1ch đều l\xe0 niềm hạnh ph\xfac cho gia đ\xecnh ch\xfang t\xf4i.",
                            }),
                  }),
                ],
              }),
              q
                ? (0, n.jsxs)(l.P.div, {
                    className: "rounded-2xl bg-card p-12 text-center shadow-lg",
                    children: [
                      (0, n.jsx)(l.P.div, {
                        initial: { opacity: 0, scale: 0.9 },
                        whileInView: { opacity: 1, scale: 1 },
                        transition: { duration: 1 },
                        viewport: { once: !0 },
                        className:
                          "mx-auto relative mb-4 h-50 w-50 overflow-hidden rounded-full shadow-xl md:h-70 md:w-70",
                        children: (0, n.jsx)(m.default, {
                          src: y,
                          alt: "Bride and Groom",
                          fill: !0,
                          className: "object-cover",
                          sizes: "(max-width: 768px) 100vw, 50vw",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, n.jsx)("h3", {
                        className: "font-serif text-2xl",
                        children: Q.title,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-muted-foreground",
                        children: Q.desc,
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "mt-6 flex items-center justify-center gap-2 text-primary",
                        children: [
                          (0, n.jsx)(A.A, {
                            className: "h-5 w-5 fill-primary",
                          }),
                          (0, n.jsx)("div", {
                            className: "text-center italic leading-relaxed",
                            children:
                              "groom" === N
                                ? (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsxs)("span", {
                                        className: "block sm:inline",
                                        children: [(0, T.AP)(j), " "],
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: "block sm:inline",
                                        children: ["& ", (0, T.AP)(b)],
                                      }),
                                    ],
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsxs)("span", {
                                        className: "block sm:inline",
                                        children: [(0, T.AP)(b), " "],
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: "block sm:inline",
                                        children: ["& ", (0, T.AP)(j)],
                                      }),
                                    ],
                                  }),
                          }),
                          (0, n.jsx)(A.A, {
                            className: "h-5 w-5 fill-primary",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-8 text-center",
                        children: (0, n.jsxs)(l.P.button, {
                          type: "button",
                          animate: { y: [0, -3, 0] },
                          transition: {
                            duration: 2.2,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          whileTap: { scale: 0.97 },
                          onClick: () => {
                            var e;
                            null == (e = document.getElementById("wishes")) ||
                              e.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            " group cursor-pointer inline-flex items-center gap-2 text-sm text-primary transition-opacity duration-300 hover:opacity-80 ",
                          children: [
                            (0, n.jsx)(l.P.span, {
                              animate: { rotate: [-6, 6, -6] },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: "\uD83D\uDC8C",
                            }),
                            (0, n.jsx)("span", {
                              className:
                                " relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-primary/40  ",
                              children: d.w.success.viewWishes[w],
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, n.jsxs)(l.P.form, {
                    noValidate: !0,
                    initial: { opacity: 0, y: 40 },
                    animate: B ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8, delay: 0.2 },
                    onSubmit: G,
                    className: "rounded-2xl bg-card p-8 shadow-lg md:p-12",
                    children: [
                      (0, n.jsx)("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: k
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [Z, $, ee, et, J],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                              children: [$, ee, et, Z, J],
                            }),
                      }),
                      (0, n.jsx)("button", {
                        type: "submit",
                        disabled: D,
                        className:
                          "\n    mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-medium transition\n    ".concat(
                            D
                              ? "bg-muted text-white cursor-not-allowed"
                              : "bg-primary text-white hover:bg-muted hover:text-foreground",
                            "\n  ",
                          ),
                        children: D
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(l.P.div, {
                                  className:
                                    "h-4 w-4 rounded-full border-2 border-white border-t-transparent",
                                  animate: { rotate: 360 },
                                  transition: {
                                    repeat: 1 / 0,
                                    duration: 0.8,
                                    ease: "linear",
                                  },
                                }),
                                d.w.submit.sending[w],
                              ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(ev.A, { className: "h-4 w-4" }),
                                "en" === w
                                  ? d.w.submit.send.en
                                  : "ko" === w
                                    ? d.w.submit.send.ko
                                    : "GỬI LỜI CH\xdaC",
                              ],
                            }),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      function ey(e) {
        let {
            theme: t,
            brideName: a,
            groomName: i,
            weddingDate: s,
            side: r,
            groomWeddingDate: o,
            brideWeddingDate: c,
            groomShortName: d,
            brideShortName: m,
            hasGiftInfo: u,
            hasBridalParty: x,
            customLogo: h,
          } = e,
          p = (null == m ? void 0 : m.trim()) ? m : (0, T.AP)(a),
          g = (null == d ? void 0 : d.trim()) ? d : (0, T.AP)(i),
          v = (e) => {
            let [t, a, n] = e.split(".");
            return new Date(Number(n), Number(a) - 1, Number(t));
          },
          f = [];
        (o && f.push({ label: "Nh\xe0 G\xe1i", date: o }),
          c && f.push({ label: "Nh\xe0 Trai", date: c }),
          f.sort((e, t) => v(e.date).getTime() - v(t.date).getTime()));
        let b = (e) => {
          if (!e) return "";
          let t = e.trim().split(" ");
          return t[t.length - 1].charAt(0).toUpperCase();
        };
        return (0, n.jsx)("footer", {
          className: "bg-foreground py-16 text-background pb-5 mt-28",
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
              (0, n.jsxs)("div", {
                className: "grid gap-12 md:grid-cols-2",
                children: [
                  (0, n.jsxs)(l.P.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6 },
                    children: [
                      h
                        ? (0, n.jsx)("a", {
                            href: "#",
                            className: "mb-4 font-serif text-3xl",
                            children: h,
                          })
                        : (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("a", {
                              href: "#",
                              className: "mb-4 font-serif text-3xl",
                              children: [
                                b("groom" === r ? i : a),
                                " ",
                                "&",
                                " ",
                                b("groom" === r ? a : i),
                              ],
                            }),
                          }),
                      (0, n.jsxs)("p", {
                        className: "mb-6 leading-relaxed text-background/70",
                        children: [
                          "Sự hiện diện v\xe0 những lời ch\xfac của Qu\xfd kh\xe1ch l\xe0 niềm hạnh ph\xfac lớn nhất đối với gia đ\xecnh ch\xfang t\xf4i trong ng\xe0y trọng đại n\xe0y",
                          " ",
                          (0, T.as)(t),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "mb-6 leading-relaxed text-background/70",
                        children:
                          f.length <= 1
                            ? (0, n.jsxs)("p", {
                                children: [
                                  "groom" === r ? g : p,
                                  " &",
                                  " ",
                                  "groom" === r ? p : g,
                                  " •",
                                  " ",
                                  s,
                                ],
                              })
                            : (0, n.jsxs)("div", {
                                className: "space-y-1",
                                children: [
                                  (0, n.jsxs)("p", {
                                    children: [
                                      "groom" === r ? g : p,
                                      " &",
                                      " ",
                                      "groom" === r ? p : g,
                                    ],
                                  }),
                                  f.map((e) =>
                                    (0, n.jsxs)(
                                      "p",
                                      {
                                        children: ["• ", e.label, ": ", e.date],
                                      },
                                      e.label,
                                    ),
                                  ),
                                ],
                              }),
                      }),
                      (0, n.jsx)("div", {
                        className: "flex items-center gap-1",
                        children: (0, n.jsxs)("span", {
                          children: [
                            "Hẹn gặp Qu\xfd kh\xe1ch trong ng\xe0y trọng đại ",
                            (0, T.as)(t),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(l.P.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    children: [
                      (0, n.jsx)("h4", {
                        className: "mb-4 text-sm uppercase tracking-widest",
                        children: "Điều hướng",
                      }),
                      (0, n.jsxs)("nav", {
                        className: "grid grid-cols-2 gap-x-8 gap-y-3",
                        children: [
                          (0, n.jsx)("a", {
                            href: "#story",
                            className:
                              "block text-background/70 transition-colors hover:text-background",
                            children: "C\xe2u chuyện",
                          }),
                          (0, n.jsx)("a", {
                            href: "#timeline",
                            className:
                              "block text-background/70 transition-colors hover:text-background",
                            children: "Lịch tr\xecnh",
                          }),
                          (0, n.jsx)("a", {
                            href: "#gallery",
                            className:
                              "block text-background/70 transition-colors hover:text-background",
                            children: "Album",
                          }),
                          (0, n.jsx)("a", {
                            href: "#rsvp",
                            className:
                              "block text-background/70 transition-colors hover:text-background",
                            children: "Gửi lời ch\xfac",
                          }),
                          u &&
                            (0, n.jsx)("a", {
                              href: "#wedding-gift",
                              className:
                                "block text-background/70 transition-colors hover:text-background",
                              children: "Mừng cưới",
                            }),
                          x &&
                            (0, n.jsx)("a", {
                              href: "#bridal-party",
                              className:
                                "block text-background/70 transition-colors hover:text-background",
                              children: "Đo\xe0n rước d\xe2u",
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(l.P.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: "my-10 h-px bg-background/20 mb-5",
              }),
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "flex flex-col items-center justify-between gap-4 text-center text-sm text-background/60",
                children: (0, n.jsxs)("div", {
                  className:
                    "text-xs text-background/40 text-center md:text-right space-x-2",
                  children: [
                    (0, n.jsxs)("span", {
                      children: [
                        "Wedding Invitation by",
                        " ",
                        (0, n.jsx)("a", {
                          href: "https://suns-wedding.vercel.app/",
                          target: "_blank",
                          className:
                            "hover:text-background transition underline",
                          children: "Suns",
                        }),
                        " ",
                        "with love •",
                        " ",
                        (0, n.jsx)("a", {
                          href: "https://zalo.me/0389183498",
                          target: "_blank",
                          className: "hover:text-background transition",
                          children: "Zalo",
                        }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      className: "text-background/30",
                      children: "|",
                    }),
                    (0, n.jsx)("a", {
                      href: "https://tiktok.com/@thiepcuoionlinesunsss",
                      target: "_blank",
                      className: "hover:text-background transition",
                      children: "TikTok",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      let eN = [
        {
          title: "Một đời",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-1_lwrauo.mp3",
          artist: "",
        },
        {
          title: "Ta l\xe0 của nhau",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-2_kb8xxi.mp3",
          artist: "",
        },
        {
          title: "Lễ đường",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-3_ypjmkf.mp3",
          artist: "",
        },
      ];
      function ew(e) {
        let { playlist: t, autoPlay: a, lang: s = "vi" } = e,
          o = (0, i.useRef)(null),
          [c, m] = (0, i.useState)(!1),
          [u, x] = (0, i.useState)(!1),
          [h, p] = (0, i.useState)(0),
          [g, v] = (0, i.useState)("0:00"),
          [f, b] = (0, i.useState)("0:00"),
          [j, y] = (0, i.useState)(0),
          [N, w] = (0, i.useState)(!1),
          k = (0, i.useRef)(null),
          C = t || eN,
          T = (0, i.useRef)(!1),
          P = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          if (a && k.current) {
            let e = k.current;
            ((e.volume = 0.7),
              e
                .play()
                .then(() => {
                  m(!0);
                })
                .catch(() => {
                  console.log("Autoplay bị chặn");
                }));
          }
        }, [a]);
        let S = (e) => {
          let t = Math.floor(e / 60),
            a = Math.floor(e % 60);
          return "".concat(t, ":").concat(a.toString().padStart(2, "0"));
        };
        (0, i.useEffect)(() => {
          let e = k.current;
          if (!e) return;
          let t = () => {
              e.duration &&
                (p((e.currentTime / e.duration) * 100), v(S(e.currentTime)));
            },
            a = () => {
              b(S(e.duration));
            },
            n = async () => {
              let e = k.current;
              e && (1 === C.length ? ((e.currentTime = 0), e.play()) : z());
            };
          return (
            e.addEventListener("timeupdate", t),
            e.addEventListener("loadedmetadata", a),
            e.addEventListener("ended", n),
            () => {
              (e.removeEventListener("timeupdate", t),
                e.removeEventListener("loadedmetadata", a),
                e.removeEventListener("ended", n));
            }
          );
        }, []);
        let I = async () => {
            let e = k.current;
            if (e)
              if (c) (e.pause(), (P.current = !0), m(!1));
              else
                try {
                  (await e.play(), m(!0));
                } catch (e) {
                  console.log("Play failed");
                }
          },
          z = () => {
            y((e) => (e + 1) % C.length);
          };
        return (
          (0, i.useEffect)(() => {
            (p(0), v("0:00"));
          }, [j]),
          (0, i.useEffect)(() => {
            let e = (e) => {
              o.current && !o.current.contains(e.target) && x(!1);
            };
            return (
              u && document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [u]),
          (0, i.useEffect)(() => {
            let e = async () => {
              if (T.current || P.current) return;
              T.current = !0;
              let e = k.current;
              if (e)
                try {
                  ((e.volume = 0.7), await e.play(), m(!0));
                } catch (e) {
                  console.log("Autoplay failed");
                }
            };
            return (
              document.addEventListener("pointerdown", e),
              () => {
                document.removeEventListener("pointerdown", e);
              }
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("audio", {
                ref: k,
                src: C[j].src,
                preload: "metadata",
                onLoadedMetadata: () => {
                  if (c) {
                    var e;
                    null == (e = k.current) || e.play();
                  }
                },
              }),
              (0, n.jsx)(l.P.div, {
                ref: o,
                initial: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 1 },
                className: "fixed right-4 bottom-24 z-50",
                children: (0, n.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, n.jsx)(r.N, {
                      children:
                        N &&
                        !u &&
                        (0, n.jsx)(l.P.div, {
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: {
                            opacity: { duration: 0.25 },
                            x: { duration: 0.25 },
                          },
                          className:
                            " relative px-3 py-1 rounded-[5px] bg-white backdrop-blur-md border border-white/20 text-primary text-sm shadow-md whitespace-nowrap  after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:w-2 after:h-2 after:rotate-45 after:bg-white after:border-r after:border-b after:border-white/20 ",
                          children: c ? d.ud.playing[s] : d.ud.idle[s],
                        }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col items-end gap-2",
                      children: [
                        (0, n.jsx)(r.N, {
                          children:
                            u &&
                            (0, n.jsxs)(l.P.div, {
                              initial: { opacity: 0, y: 10, scale: 0.9 },
                              animate: { opacity: 1, y: 0, scale: 1 },
                              exit: { opacity: 0, y: 10, scale: 0.9 },
                              transition: { duration: 0.2 },
                              className:
                                "bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl p-4 shadow-xl w-64",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex items-center gap-3 mb-3",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5 text-primary",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        (0, n.jsx)("p", {
                                          className:
                                            "font-serif text-sm text-foreground truncate",
                                          children: C[j].title,
                                        }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: C[j].artist,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "h-1.5 bg-secondary rounded-full cursor-pointer mb-2 group",
                                  onClick: (e) => {
                                    let t = k.current;
                                    if (!t) return;
                                    let a =
                                      e.currentTarget.getBoundingClientRect();
                                    t.currentTime =
                                      ((e.clientX - a.left) / a.width) *
                                      t.duration;
                                  },
                                  children: (0, n.jsx)(l.P.div, {
                                    className:
                                      "h-full bg-primary rounded-full relative",
                                    style: { width: "".concat(h, "%") },
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                                    }),
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex justify-between text-xs text-muted-foreground mb-3",
                                  children: [
                                    (0, n.jsx)("span", { children: g }),
                                    (0, n.jsx)("span", { children: f }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center justify-center gap-4",
                                  children: [
                                    (0, n.jsx)("button", {
                                      onClick: () => {
                                        y((e) =>
                                          0 === e ? C.length - 1 : e - 1,
                                        );
                                      },
                                      className:
                                        "p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsx)("button", {
                                      onClick: I,
                                      className:
                                        "cursor-pointer w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg",
                                      children: c
                                        ? (0, n.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, n.jsx)("path", {
                                              d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
                                            }),
                                          })
                                        : (0, n.jsx)("svg", {
                                            className: "w-5 h-5 ml-0.5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, n.jsx)("path", {
                                              d: "M8 5v14l11-7z",
                                            }),
                                          }),
                                    }),
                                    (0, n.jsx)("button", {
                                      onClick: z,
                                      className:
                                        "p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                        (0, n.jsx)(l.P.button, {
                          onMouseEnter: () => {
                            w(!0);
                          },
                          onMouseLeave: () => {
                            w(!1);
                          },
                          onClick: () => {
                            (x(!u), c || I());
                          },
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          className:
                            "cursor-pointer w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ".concat(
                              c
                                ? "bg-primary text-primary-foreground"
                                : "bg-background/95 backdrop-blur-md border border-primary/20 text-primary",
                            ),
                          children: c
                            ? (0, n.jsx)("div", {
                                className: "relative",
                                children: (0, n.jsx)("div", {
                                  className: "flex items-end gap-0.5 h-5",
                                  children: [1, 2, 3, 4].map((e) =>
                                    (0, n.jsx)(
                                      l.P.div,
                                      {
                                        className:
                                          "w-1 bg-current rounded-full",
                                        animate: {
                                          height: ["8px", "20px", "8px"],
                                        },
                                        transition: {
                                          duration: 0.5,
                                          repeat: 1 / 0,
                                          delay: 0.1 * e,
                                        },
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              })
                            : (0, n.jsx)("svg", {
                                className: "w-6 h-6",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, n.jsx)("path", {
                                  d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
                                }),
                              }),
                        }),
                        !u &&
                          (0, n.jsx)(l.P.button, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            onClick: (e) => {
                              (e.stopPropagation(), I());
                            },
                            className:
                              "absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary/80 backdrop-blur-sm hidden items-center justify-center text-foreground hover:bg-secondary transition-colors shadow-md",
                            children: c
                              ? (0, n.jsx)("svg", {
                                  className: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, n.jsx)("path", {
                                    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
                                  }),
                                })
                              : (0, n.jsx)("svg", {
                                  className: "w-4 h-4 ml-0.5",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, n.jsx)("path", {
                                    d: "M8 5v14l11-7z",
                                  }),
                                }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function ek(e) {
        let {
          weddingDate: t,
          groomWeddingDate: a,
          brideWeddingDate: i,
          lang: s = "vi",
        } = e;
        if (a && i) {
          let e = (0, T.Zj)(a),
            t = (0, T.Zj)(i);
          if (
            e.getMonth() !== t.getMonth() ||
            e.getFullYear() !== t.getFullYear()
          )
            return null;
        }
        let r = (0, T.Zj)(t),
          o = r.getFullYear(),
          c = r.getMonth(),
          d = new Set();
        (a && d.add((0, T.Zj)(a).getDate()),
          i && d.add((0, T.Zj)(i).getDate()),
          a || i || !t || d.add((0, T.Zj)(t).getDate()));
        let m = new Date(o, c + 1, 0).getDate(),
          u = new Date(o, c, 1).getDay(),
          x = Array.from({ length: m }, (e, t) => t + 1),
          h = Array.from({ length: (u + 6) % 7 });
        return (0, n.jsxs)(l.P.div, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          className:
            "pb-16 mx-4 md:mx-auto max-w-2xl rounded-2xl bg-gradient-to-b from-calendar-from to-calendar-to p-4 md:p-8 shadow-md mb-16 mt-16",
          children: [
            (0, n.jsxs)("div", {
              className: "mb-6 flex items-center justify-center gap-4",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "h-px w-20 bg-calendar-to hidden min-[768px]:block",
                }),
                (0, n.jsx)("h2", {
                  className: "font-serif md:text-3xl text-2xl text-[#4a3b2f]",
                  children:
                    "ko" === s
                      ? "".concat(o, ", ").concat(c + 1, "월")
                      : ""
                          .concat(
                            {
                              vi: [
                                "Th\xe1ng 1",
                                "Th\xe1ng 2",
                                "Th\xe1ng 3",
                                "Th\xe1ng 4",
                                "Th\xe1ng 5",
                                "Th\xe1ng 6",
                                "Th\xe1ng 7",
                                "Th\xe1ng 8",
                                "Th\xe1ng 9",
                                "Th\xe1ng 10",
                                "Th\xe1ng 11",
                                "Th\xe1ng 12",
                              ],
                              en: [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December",
                              ],
                              ko: [
                                "1월",
                                "2월",
                                "3월",
                                "4월",
                                "5월",
                                "6월",
                                "7월",
                                "8월",
                                "9월",
                                "10월",
                                "11월",
                                "12월",
                              ],
                            }[s][c],
                            ", ",
                          )
                          .concat(o),
                }),
                (0, n.jsx)("div", {
                  className:
                    "h-px w-20 bg-calendar-to hidden min-[768px]:block",
                }),
              ],
            }),
            (0, n.jsx)("p", {
              className:
                "mt-4 mb-8 text-center text-xs uppercase tracking-[0.35em] text-gold",
              children: "Save The Date",
            }),
            (0, n.jsx)("div", {
              className:
                "grid grid-cols-7 text-center text-sm font-medium text-foreground mb-4",
              children: {
                vi: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
                en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                ko: ["월", "화", "수", "목", "금", "토", "일"],
              }[s].map((e) => (0, n.jsx)("span", { children: e }, e)),
            }),
            (0, n.jsxs)("div", {
              className:
                "grid grid-cols-7 gap-y-4 gap-x-2 text-center font-serif",
              children: [
                h.map((e, t) => (0, n.jsx)("div", {}, "e-".concat(t))),
                x.map((e) => {
                  let t = d.has(e);
                  return (0, n.jsx)(
                    "div",
                    {
                      className:
                        "relative flex items-center justify-center text-lg",
                      children: t
                        ? (0, n.jsxs)("div", {
                            className:
                              "relative flex items-center justify-center",
                            children: [
                              (0, n.jsx)(l.P.span, {
                                className:
                                  "absolute text-focus-ring text-5xl font-thin leading-none",
                                animate: { scale: [1.3, 1.45, 1.3] },
                                transition: {
                                  duration: 1.1,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                                style: {
                                  filter:
                                    "drop-shadow(0 1px 1px rgba(0,0,0,0.06))",
                                },
                                children: "♡",
                              }),
                              (0, n.jsx)("span", {
                                className:
                                  "relative z-10 font-bold text-gold text-xl",
                                children: e,
                              }),
                            ],
                          })
                        : (0, n.jsx)("span", {
                            className: "text-[#4a3b2f]",
                            children: e,
                          }),
                    },
                    e,
                  );
                }),
              ],
            }),
          ],
        });
      }
      function eC(e) {
        let {
            image:
              t = "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777113214/QT000784_mrnf9t.jpg",
            brideName: a = "Nguyễn Thị Hồng Nhung",
            groomName: i = "Trần Văn Minh",
            theme: s = "classic",
            side: r,
            title: o,
            description: c,
            groomShortName: d,
            brideShortName: u,
          } = e,
          x = (null == u ? void 0 : u.trim()) || (0, T.AP)(a) || a,
          h = (null == d ? void 0 : d.trim()) || (0, T.AP)(i) || i;
        return (0, n.jsx)("section", {
          className: "py-20 md:py-28 pb-0 md:pb-0",
          children: (0, n.jsxs)("div", {
            className:
              "mx-auto flex max-w-3xl flex-col items-center px-6 text-center",
            children: [
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 1 },
                viewport: { once: !0 },
                className:
                  "relative mb-10 h-50 w-50 overflow-hidden rounded-full shadow-xl md:h-70 md:w-70",
                children: (0, n.jsx)(m.default, {
                  src: t,
                  alt: "Bride and Groom",
                  fill: !0,
                  className: "object-cover",
                  sizes: "(max-width: 768px) 100vw, 50vw",
                  loading: "lazy",
                  unoptimized: !0,
                }),
              }),
              (0, n.jsx)("p", {
                className:
                  "mb-3 text-sm uppercase tracking-[0.3em] text-primary",
                children: "THANK YOU",
              }),
              (0, n.jsx)("h2", {
                className:
                  "font-serif text-base md:text-xl text-foreground mb-3 leading-loose",
                children: o
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [o, (0, n.jsx)("br", {}), (0, T.as)(s)],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        "groom" === r ? h : x,
                        " v\xe0",
                        " ",
                        "groom" === r ? x : h,
                        " ",
                        (0, n.jsx)("br", {}),
                        "xin ch\xe2n th\xe0nh cảm ơn v\xe0 hẹn gặp Qu\xfd kh\xe1ch trong ng\xe0y trọng đại!",
                        (0, n.jsx)("br", {}),
                        (0, T.as)(s),
                        (0, T.as)(s),
                        (0, T.as)(s),
                      ],
                    }),
              }),
              (0, n.jsx)(l.P.p, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.2 },
                viewport: { once: !0 },
                className:
                  "max-w-2xl leading-8 text-muted-foreground text-base",
                children:
                  c ||
                  "Sự hiện diện v\xe0 những lời ch\xfac của Qu\xfd kh\xe1ch l\xe0 niềm hạnh ph\xfac lớn đối với gia đ\xecnh ch\xfang t\xf4i.",
              }),
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0, scaleX: 0 },
                whileInView: { opacity: 1, scaleX: 1 },
                transition: { duration: 0.8, delay: 0.4 },
                viewport: { once: !0 },
                className: "mt-10 h-px w-24 bg-primary/30",
              }),
            ],
          }),
        });
      }
      var eT = a(18344),
        eP = a(77255);
      function eS(e) {
        let { lang: t = "vi" } = e,
          [a, s] = (0, i.useState)(!1),
          r = (0, eT.s)(),
          o = () => {
            let e = document.getElementById("rsvp");
            e && e.scrollIntoView({ behavior: "smooth", block: "start" });
          },
          c = () => {
            r.start({ x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.4 } });
          };
        return (
          (0, i.useEffect)(() => {
            let e,
              t = () => {
                (s(!0),
                  c(),
                  (e = setTimeout(() => {
                    (s(!1),
                      (e = setTimeout(() => {
                        t();
                      }, 2500)));
                  }, 5e3)));
              };
            return (t(), () => clearTimeout(e));
          }, []),
          (0, n.jsxs)("div", {
            className: "fixed right-4 bottom-6 z-50 flex items-center gap-2",
            children: [
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: +!!a, x: 20 * !a },
                transition: {
                  opacity: { duration: 0.25 },
                  x: { duration: 0.25 },
                },
                className:
                  " relative px-3 py-1 rounded-[5px] bg-white backdrop-blur-md border border-white/20 text-primary text-sm shadow-md whitespace-nowrap  after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:w-2 after:h-2 after:rotate-45 after:bg-white after:border-r after:border-b after:border-white/20 cursor-pointer ",
                onClick: o,
                children: d.ud.wishes[t],
              }),
              (0, n.jsx)(l.P.button, {
                animate: r,
                onClick: o,
                onMouseEnter: () => {
                  (s(!0), c());
                },
                onMouseLeave: () => {
                  s(!1);
                },
                whileHover: { scale: 1.08 },
                whileTap: { scale: 0.92 },
                className:
                  " cursor-pointer flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary shadow-xl hover:bg-white/20 transition-all ",
                children: (0, n.jsx)(eP.A, { className: "w-6 h-6" }),
              }),
            ],
          })
        );
      }
      var eI = a(38848),
        ez = a.n(eI),
        eD = a(86797),
        eV = a.n(eD),
        e_ = a(47790),
        eA = a.n(e_),
        eE = a(66300),
        eL = a.n(eE);
      function eM(e) {
        let {
            guestName: t,
            data: a,
            groomName: i,
            brideName: s,
            side: r,
            groomShortName: o,
            brideShortName: c,
          } = e,
          d = o || i,
          u = c || s,
          x = ((e, t) => {
            if (!e) return null;
            if (!t) {
              let t = new Date(e);
              return {
                day: String(t.getDate()).padStart(2, "0"),
                month: String(t.getMonth() + 1).padStart(2, "0"),
                year: t.getFullYear(),
              };
            }
            let a = new Date(e),
              n = new Date(t);
            a.getTime() > n.getTime() && ([a, n] = [n, a]);
            let i = String(a.getDate()).padStart(2, "0"),
              s = String(a.getMonth() + 1).padStart(2, "0"),
              l = a.getFullYear(),
              r = String(n.getDate()).padStart(2, "0"),
              o = String(n.getMonth() + 1).padStart(2, "0"),
              c = n.getFullYear();
            return {
              day: "".concat(i, "\xa0-\xa0").concat(r),
              month: s,
              year: l,
              secondMonth: o,
              secondYear: c,
              isRange: !0,
            };
          })(null == a ? void 0 : a.date, null == a ? void 0 : a.date2);
        return (0, n.jsx)("div", {
          className:
            "relative w-full overflow-hidden flex flex-col justify-between pt-2 pb-2",
          style: {
            height: "auto",
            minHeight: 0,
            boxShadow: "none",
          },
          children: (0, n.jsxs)("div", {
            className: "flex flex-col px-4 pt-1 pb-1",
            children: [
              (0, n.jsx)("div", {
                className: "text-center",
                children: (0, n.jsx)("h1", {
                  className: "".concat(
                    ez().className,
                    " text-[14px] font-bold tracking-widest text-secondary",
                  ),
                  children: "THIỆP MỜI",
                }),
              }),
              (0, n.jsxs)("div", {
                className: ""
                  .concat(
                    eV().className,
                    " mt-0.5 flex items-center justify-center font-normal text-secondary ",
                  )
                  .concat(
                    (null == a ? void 0 : a.date2)
                      ? "text-[28px]"
                      : "text-[32px] leading-tight",
                  ),
                children: [
                  (0, n.jsx)("span", { children: null == x ? void 0 : x.day }),
                  (0, n.jsx)("span", { className: "mx-2", children: "." }),
                  (0, n.jsx)("span", {
                    children: null == x ? void 0 : x.month,
                  }),
                  (0, n.jsx)("span", { className: "mx-2", children: "." }),
                  (0, n.jsx)("span", { children: null == x ? void 0 : x.year }),
                ],
              }),
              (null == a ? void 0 : a.lunarDate) &&
                (0, n.jsxs)("p", {
                  className:
                    "text-center text-[12px] md:text-[13px] text-secondary mb-0.5",
                  children: ["(", a.lunarDate, ")"],
                }),
              "groom" === r
                ? (0, n.jsxs)("h2", {
                    className: "".concat(
                      eA().className,
                      " flex items-center justify-center gap-2 text-[26px] text-accent",
                    ),
                    style: {
                      marginTop: 10,
                      marginBottom: 6,
                      lineHeight: 1.2,
                    },
                    children: [
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: d,
                      }),
                      (0, n.jsx)(l.P.div, {
                        animate: { scale: [1, 1.3, 1] },
                        transition: {
                          duration: 1.2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        children: (0, n.jsx)(A.A, {
                          className: "h-4 w-4 text-secondary mx-1.5",
                          fill: "var(--foreground)",
                          strokeWidth: 2,
                        }),
                      }),
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: u,
                      }),
                    ],
                  })
                : (0, n.jsxs)("h2", {
                    className: "".concat(
                      eA().className,
                      " flex items-center justify-center gap-2 text-[26px] text-accent",
                    ),
                    style: {
                      marginTop: 10,
                      marginBottom: 6,
                      lineHeight: 1.2,
                    },
                    children: [
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: u,
                      }),
                      (0, n.jsx)(l.P.div, {
                        animate: { scale: [1, 1.3, 1] },
                        transition: {
                          duration: 1.2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        children: (0, n.jsx)(A.A, {
                          className: "h-4 w-4 text-secondary mx-1.5",
                          fill: "var(--foreground)",
                          strokeWidth: 2,
                        }),
                      }),
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: d,
                      }),
                    ],
                  }),
              (0, n.jsxs)("div", {
                className:
                  "relative mx-auto mt-2 flex w-[92vw] md:w-[520px] flex-col items-center",
                style: {
                  width:
                    "min(92vw,520px,calc(57dvh - 135px),calc(100% - 24px))",
                },
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "w-full aspect-[3/4] border-[4px] border-border relative overflow-hidden bg-black shadow-md",
                    children: (0, n.jsx)(m.default, {
                      src: (null == a ? void 0 : a.image) || "images/download_1_bq8fyl_j9segm.jpg",
                      alt: "couple",
                      fill: !0,
                      className: "object-cover",
                      sizes: "100vw",
                      priority: !0,
                      unoptimized: !0,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "mt-2 text-center",
                    children: [
                      (0, n.jsx)("p", {
                        className: "".concat(
                          ez().className,
                          "\n      text-[13px]\n      uppercase\n      tracking-[0.25em]\n      text-secondary\n      font-bold",
                        ),
                        children: "Tr\xe2n Trọng K\xednh Mời",
                      }),
                      (0, n.jsx)("h3", {
                        className: "".concat(
                          eL().className,
                          "\n      mt-3\n      text-[20px]\n      leading-none\n      text-[#3a322f]",
                        ),
                        children: t,
                      }),
                      (0, n.jsx)("div", {
                        className: "hidden",
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var eH = a(51051),
        eB = a.n(eH);
      function eq(e) {
        let {
            weddingDate: t,
            image: a,
            groomWeddingDate: i,
            brideWeddingDate: s,
          } = e,
          r = new Date(t),
          o = r.getFullYear(),
          c = r.getMonth(),
          d = [];
        (i && d.push(new Date(i).getDate()),
          s && d.push(new Date(s).getDate()),
          i || s || d.push(r.getDate()));
        let u = new Date(o, c + 1, 0).getDate(),
          x = [
            ...Array((new Date(o, c, 1).getDay() + 6) % 7).fill(""),
            ...Array.from({ length: u }, (e, t) => String(t + 1)),
          ];
        return (0, n.jsxs)(l.P.div, {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, amount: 0.3 },
          transition: { duration: 1, ease: "easeOut" },
          className:
            "mx-auto mt-0 my-6 flex w-full max-w-2xl items-center justify-between bg-background p-6 px-3 shadow-xl text-white select-none",
          children: [
            (0, n.jsxs)("div", {
              className:
                "w-[42%] bg-[#f4f3ef] p-2 pb-4 shadow-md flex flex-col justify-between aspect-[3/4]",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "relative w-full h-[82%] bg-[#e2e0d9] overflow-hidden",
                  children: (0, n.jsx)(m.default, {
                    src:
                      a ||
                      "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779775623/660472421_1489207229234823_255262384024361533_n_byx6jt.jpg",
                    alt: "D\xe2u Rể",
                    fill: !0,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 100vw, 50vw",
                    loading: "lazy",
                    unoptimized: !0,
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "".concat(
                    eB().className,
                    " text-[#4a5548] text-center text-lg mt-2 leading-none",
                  ),
                  children: "Save the date",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "w-[53%] flex flex-col justify-center pl-2",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "text-right text-base font-normal tracking-wide mb-4 pr-2 font-sans",
                  children: "Th\xe1ng "
                    .concat(String(c + 1).padStart(2, "0"), ".")
                    .concat(o),
                }),
                (0, n.jsx)("div", {
                  className:
                    "grid grid-cols-7 gap-y-3 text-center text-xs font-normal mb-2",
                  children: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map(
                    (e) => (0, n.jsx)("div", { children: e }, e),
                  ),
                }),
                (0, n.jsx)("div", {
                  className:
                    "grid grid-cols-7 gap-y-3 text-center text-xs font-light text-gray-200/90 font-mono",
                  children: x.map((e, t) => {
                    let a = Number(e),
                      i = d.filter((e) => e === a).length;
                    return (0, n.jsx)(
                      "div",
                      {
                        className:
                          "relative flex items-center justify-center h-7 w-7 mx-auto",
                        children:
                          i > 0
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(l.P.div, {
                                    className:
                                      "absolute inset-0 flex items-center justify-center scale-[1.4] text-[#f4f3ef]",
                                    animate: { scale: [1.2, 1.6, 1.2] },
                                    transition: {
                                      duration: 1.2,
                                      repeat: 1 / 0,
                                      ease: "easeInOut",
                                    },
                                    children: (0, n.jsx)(A.A, {
                                      fill: "#f4f3ef",
                                      stroke: "none",
                                      className: "w-[75%] h-[75%] transform",
                                    }),
                                  }),
                                  2 === i &&
                                    (0, n.jsx)(l.P.div, {
                                      className:
                                        "absolute inset-0 flex items-center justify-center scale-[1.4] text-[#f4f3ef]",
                                      animate: { scale: [1.1, 1.5, 1.1] },
                                      transition: {
                                        duration: 1.2,
                                        delay: 0.2,
                                        repeat: 1 / 0,
                                        ease: "easeInOut",
                                      },
                                      children: (0, n.jsx)(A.A, {
                                        fill: "#f4f3ef",
                                        stroke: "none",
                                        className:
                                          "w-[75%] h-[75%] transform opacity-70",
                                      }),
                                    }),
                                  (0, n.jsx)("span", {
                                    className:
                                      "relative z-10 font-bold text-background text-[13px]",
                                    children: e,
                                  }),
                                ],
                              })
                            : (0, n.jsx)("span", {
                                className: e ? "text-white" : "",
                                children: e,
                              }),
                      },
                      t,
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var eF = a(52801),
        eR = a.n(eF),
        eW = a(36753),
        eG = a.n(eW),
        eO = a(61550),
        eQ = a.n(eO);
      let eU = [
        {
          title: "Lễ Vu Quy",
          lunarDay: "",
          time: "09:00 - 10:30",
          address: "Số 45, Đường Phan Đ\xecnh Ph\xf9ng",
          area: "Quận Ba Đ\xecnh, H\xe0 Nội",
          mapUrl: "https://maps.google.com",
          icon: "\uD83C\uDFE0",
          image:
            "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779775573/660129470_1489207882568091_3952862681517529397_n_1_lt6f2e.jpg",
        },
        {
          title: "Lễ Th\xe0nh H\xf4n",
          lunarDay: "",
          time: "11:00 - 14:00",
          address: "White Palace",
          area: "123 Đường L\xe1ng, H\xe0 Nội",
          mapUrl: "https://maps.google.com",
          icon: "\uD83D\uDC92",
          image:
            "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779775567/658125302_1489207312568148_8465429175476541241_n_1_q4j8ka.jpg",
        },
      ];
      function eY(e) {
        var t;
        let {
            venues: a,
            dressColors: s = [],
            weddingId: r,
            dressCodeDescription: o = "",
          } = e,
          c = (0, i.useRef)(null),
          d = (0, z.W)(c, { once: !0, margin: "-100px" }),
          u = a || eU;
        return (0, n.jsx)("section", {
          id: "timeline",
          ref: c,
          className: "pb-12 bg-background",
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-6xl px-4 md:px-6",
            children: [
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0, y: 30 },
                animate: d ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "text-center",
                children: (0, n.jsx)("h2", {
                  className: "".concat(
                    eR().className,
                    "\n              py-5\n              text-[30px]\n              leading-none\n              text-white\n              md:text-[58px]\n            ",
                  ),
                  children:
                    "3d56a21c-a0ff-4f79-bc66-c5c6163d25ce" === r
                      ? "H\xf4n lễ được tổ chức"
                      : "Sự kiện cưới",
                }),
              }),
              (0, n.jsx)("div", {
                className: "grid gap-3 md:gap-6 ".concat(
                  u.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
                ),
                children: u.map((e, t) =>
                  (0, n.jsxs)(
                    l.P.div,
                    {
                      initial: { opacity: 0, y: 40 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, amount: 0.2 },
                      transition: { duration: 0.8, delay: 0.15 * t },
                      whileHover: { y: -5 },
                      className: " overflow-hidden  bg-[#faf8f5] shadow-md ",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "relative overflow-hidden h-70 md:h-[420px]",
                          children: [
                            (0, n.jsx)(m.default, {
                              src: e.image,
                              alt: e.title,
                              fill: !0,
                              className: "object-cover",
                              sizes: "(max-width: 768px) 100vw, 50vw",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                            (0, n.jsx)("div", {
                              className: "absolute inset-0 bg-black/10",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "p-3 md:p-5",
                          children: [
                            (0, n.jsx)("h3", {
                              className: "".concat(
                                eG().className,
                                "\n                    mb-3\n                    text-[21px]\n                    font-semibold\n                    text-secondary\n                    md:text-[28px]\n                  ",
                              ),
                              children: e.title,
                            }),
                            (0, n.jsxs)("div", {
                              className: "space-y-3",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex gap-2 items-start",
                                  children: [
                                    (0, n.jsx)(ea.A, {
                                      className:
                                        "mt-1 h-4 w-4 shrink-0 text-secondary",
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: "".concat(
                                            eQ().className,
                                            "\n        text-[15px]\n        tracking-[0.15em]\n        text-[#8b6b54]\n        md:text-sm\n        font-medium\n      ",
                                          ),
                                          children: e.time,
                                        }),
                                        e.lunarDay &&
                                          (0, n.jsxs)("p", {
                                            className: "".concat(
                                              eG().className,
                                              "\n                          text-[16px]\n                          text-[#8b6b54]\n                          md:text-[14px]\n                          font-medium\n                        ",
                                            ),
                                            children: ["(", e.lunarDay, ")"],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    (0, n.jsx)(en.A, {
                                      className:
                                        "mt-1 h-4 w-4 shrink-0 text-secondary",
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("p", {
                                          className: "".concat(
                                            eG().className,
                                            "\n                          text-[18px]\n                          font-semibold\n                          text-[#3d3028]\n                          md:text-[17px]\n                          font-medium\n                        ",
                                          ),
                                          children: e.address,
                                        }),
                                        (0, n.jsx)("p", {
                                          className: "".concat(
                                            eG().className,
                                            "\n                          text-[16px]\n                          text-[#8b6b54]\n                          md:text-[14px]\n                          font-medium\n                        ",
                                          ),
                                          children: e.area,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.mapUrl &&
                              "" !== e.mapUrl.trim() &&
                              (0, n.jsxs)(l.P.a, {
                                href: e.mapUrl || "#",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: { scale: 1.03 },
                                whileTap: { scale: 0.97 },
                                className:
                                  "\n                    mt-4\n                    flex\n                    items-center\n                    justify-center\n                    gap-2\n                    rounded-full\n                    border\n                    border-secondary\n                    px-4\n                    py-2\n                    text-[10px]\n                    tracking-[0.15em]\n                    text-secondary\n                    transition-all\n                    hover:bg-secondary\n                    hover:text-white\n                    md:text-xs\n                    font-medium\n                  ",
                                children: [
                                  (0, n.jsx)(ei.A, { className: "h-4 w-4" }),
                                  "Chỉ đường",
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
              ((null != (t = null == s ? void 0 : s.length) ? t : 0) > 0 ||
                (null == o ? void 0 : o.trim())) &&
                (0, n.jsxs)(l.P.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8 },
                  className:
                    " mt-12 border bg-[#faf8f5] p-8 text-center shadow-md ",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10",
                      children: (0, n.jsx)(es.A, {
                        className: "h-8 w-8 text-secondary",
                      }),
                    }),
                    (0, n.jsx)("h3", {
                      className: "".concat(
                        eG().className,
                        "\n        text-[15px]\n        tracking-[0.2em]\n        text-secondary\n        font-bold\n      ",
                      ),
                      children: "M\xc0U TRANG PHỤC",
                    }),
                    (0, n.jsx)("p", {
                      className: "".concat(
                        eG().className,
                        "\n        mt-1\n        italic\n        text-[#8b6b54]\n        font-medium\n      ",
                      ),
                      children: "Dress Code",
                    }),
                    (null == o ? void 0 : o.trim()) &&
                      (0, n.jsx)("p", {
                        className: "".concat(
                          eG().className,
                          "\n          mx-auto\n          mt-4\n          max-w-2xl\n          text-[16px]\n          leading-7\n          text-[#8b6b54]\n          text-justify\n          font-medium\n        ",
                        ),
                        children: o,
                      }),
                    s.length > 0 &&
                      (0, n.jsx)("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-4",
                        children: s.map((e, t) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className:
                                " h-12 w-12 rounded-full border border-[#e8d9c9] transition-transform hover:scale-105 md:h-16 md:w-16 ",
                              style: {
                                backgroundColor: e,
                                boxShadow: "0 6px 15px rgba(0,0,0,.08)",
                              },
                            },
                            t,
                          ),
                        ),
                      }),
                  ],
                }),
            ],
          }),
        });
      }
      var eK = a(19979),
        eX = a(87212),
        eZ = a(48467),
        e$ = a.n(eZ);
      let eJ = [
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777117340/476589360_1052589936909553_6232669697745345496_n_bn5ljh.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777117340/518275637_1173940161441196_7011014911912099565_n_wwgudn.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777117322/469837820_1007579698077244_746720596022190017_n_twc7i0.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777116958/469885763_1007580621410485_5563157958127324110_n-1536x1024_vhj748.jpg",
          },
        ],
        e0 = [
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115924/QT000704_ufpkgt.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115924/QT000697_tues4e.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115924/QT000705_c12zfq.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115925/QT000908_orelhj.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115925/QT001024_sf6jy5.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777116682/QT000937_ag6xlo.jpg",
          },
        ],
        e1 = [{ src: "" }, { src: "" }, { src: "" }, { src: "" }, { src: "" }],
        e2 = [{ src: "" }, { src: "" }];
      function e4(e) {
        let { images: t, lang: a = "vi", title: s } = e,
          r = (0, i.useRef)(null),
          o = (null == t ? void 0 : t.landscape) || eJ,
          c = (null == t ? void 0 : t.portrait) || e0,
          u = (null == t ? void 0 : t.loveFlowey) || e1,
          x = (null == t ? void 0 : t.editorial) || e2,
          [h, p] = (0, i.useState)(0),
          [g, v] = (0, i.useState)(0),
          [f, b] = (0, i.useState)(!1),
          [j, y] = (0, i.useState)(3),
          [N, k] = (0, i.useState)(null),
          C = (0, i.useMemo)(
            () =>
              [...o, ...c, ...u, ...x].filter((e) =>
                null == e ? void 0 : e.src,
              ),
            [o, c, u, x],
          );
        (0, i.useEffect)(() => {
          let e = setInterval(() => {
            p((e) => (e + 1) % o.length);
          }, 4e3);
          return () => clearInterval(e);
        }, [o.length]);
        let T = (e) => {
            let t = C.findIndex((t) => t.src === e);
            -1 !== t && k(t);
          },
          P = () => k(null),
          S = () =>
            k((e) => (0 === e ? C.length - 1 : (null != e ? e : 0) - 1)),
          I = () =>
            k((e) => (e === C.length - 1 ? 0 : (null != e ? e : 0) + 1)),
          z = c.slice(g, g + j);
        (0, i.useEffect)(() => {
          let e = () => {
            (window.innerWidth, y(20));
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let D = o.some((e) => (null == e ? void 0 : e.src)),
          V = c.some((e) => (null == e ? void 0 : e.src)),
          _ = u.some((e) => (null == e ? void 0 : e.src)),
          A = x.some((e) => (null == e ? void 0 : e.src));
        return C.length > 0
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("section", {
                  className: "py-10 md:py-20 pb-0 md:pb-0 pt-4 md:pt-4",
                  ref: r,
                  id: "gallery",
                  children: (0, n.jsxs)("div", {
                    className: "mx-auto max-w-[1200px] px-6 text-center",
                    children: [
                      (0, n.jsx)("h2", {
                        className: "".concat(
                          e$().className,
                          "\n              mt-2\n              text-[30px]\n              leading-none\n              text-secondary\n              md:text-[58px]\n              text-center\n              mb-6\n            ",
                        ),
                        children: (null == s ? void 0 : s.trim())
                          ? s
                          : "en" === a
                            ? d.nR.title.en
                            : "ko" === a
                              ? d.nR.title.ko
                              : "Album ảnh cưới",
                      }),
                      D &&
                        (0, n.jsx)(n.Fragment, {
                          children: (0, n.jsx)("div", {
                            className:
                              "relative h-[300px] w-full overflow-hidden shadow-lg md:h-[520px]",
                            children: o.map((e, t) =>
                              (0, n.jsxs)(
                                l.P.div,
                                {
                                  className: "absolute inset-0 cursor-pointer",
                                  initial: { opacity: 0, scale: 1.05 },
                                  whileInView: { scale: 1 },
                                  viewport: { once: !0 },
                                  animate: { opacity: +(t === h) },
                                  transition: {
                                    opacity: { duration: 1 },
                                    scale: { duration: 1.2 },
                                  },
                                  onClick: () => T(e.src),
                                  children: [
                                    (0, n.jsx)(m.default, {
                                      src: e.src,
                                      alt: "",
                                      fill: !0,
                                      className: "object-cover",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "absolute inset-0 bg-black/10",
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        }),
                    ],
                  }),
                }),
                V &&
                  (0, n.jsx)("section", {
                    className: "pb-10 md:pb-20",
                    children: (0, n.jsx)("div", {
                      className: "relative mx-auto max-w-[1200px] px-6",
                      children: (0, n.jsx)("div", {
                        className: "grid grid-cols-2 gap-2 md:grid-cols-3",
                        onMouseEnter: () => b(!0),
                        onMouseLeave: () => b(!1),
                        children: z.map((e, t) =>
                          (0, n.jsx)(
                            l.P.div,
                            {
                              className:
                                "relative aspect-[3/4] cursor-pointer overflow-hidden",
                              initial: {
                                opacity: 0,
                                x: t % 3 == 0 ? -100 : 100 * (t % 3 == 2),
                                y: 30,
                                scale: 0.9,
                              },
                              whileInView: { opacity: 1, x: 0, scale: 1 },
                              viewport: { once: !0, amount: 0.2 },
                              transition: {
                                duration: 0.8,
                                delay: 0.08 * t,
                                ease: "easeOut",
                              },
                              whileHover: { scale: 1.03 },
                              onClick: () => T(e.src),
                              children: (0, n.jsx)(m.default, {
                                src: e.src,
                                alt: "",
                                fill: !0,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    }),
                  }),
                null !== N &&
                  (0, n.jsxs)(l.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className:
                      "fixed inset-0 z-50 flex items-center justify-center bg-black/95",
                    onClick: P,
                    children: [
                      (0, n.jsx)("button", {
                        onClick: P,
                        className:
                          "absolute right-4 top-4 z-[60] cursor-pointer text-white",
                        children: (0, n.jsx)(w.A, { size: 32 }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "absolute left-4 top-4 z-[60] rounded-full bg-black/30 px-3 py-1 text-sm md:text-base text-white/90 backdrop-blur-sm",
                        children: ["(", N + 1, "/", C.length, ")"],
                      }),
                      (0, n.jsx)("button", {
                        onClick: (e) => {
                          (e.stopPropagation(), S());
                        },
                        className:
                          "cursor-pointer absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white md:left-6",
                        children: (0, n.jsx)(eK.A, { size: 24 }),
                      }),
                      (0, n.jsx)(l.P.div, {
                        className:
                          "relative h-[100vh] w-[100vw] max-w-5xl touch-pan-y",
                        onClick: (e) => e.stopPropagation(),
                        drag: "x",
                        dragConstraints: { left: 0, right: 0 },
                        onDragEnd: (e, t) => {
                          t.offset.x < -80 ? I() : t.offset.x > 80 && S();
                        },
                        style: { touchAction: "pan-y" },
                        children: (0, n.jsx)(m.default, {
                          src: C[N].src,
                          alt: "",
                          fill: !0,
                          className: "select-none object-contain",
                          draggable: !1,
                          sizes: "(max-width: 768px) 100vw, 50vw",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, n.jsx)("button", {
                        onClick: (e) => {
                          (e.stopPropagation(), I());
                        },
                        className:
                          "cursor-pointer absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white md:right-6",
                        children: (0, n.jsx)(eX.A, { size: 24 }),
                      }),
                    ],
                  }),
                _ &&
                  (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("section", {
                      className: "pb-10 md:pb-16",
                      children: (0, n.jsx)("div", {
                        className: "mx-auto max-w-[1200px] px-4 md:px-6",
                        children: (0, n.jsxs)("div", {
                          className:
                            "grid grid-cols-1 gap-4 overflow-hidden md:gap-5 lg:grid-cols-2",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "p-1 md:h-[640px] md:p-2 md:pb-20 md:pt-10",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "grid h-full grid-cols-[1.15fr_0.85fr] gap-2",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        "mt-1 flex h-full flex-col pt-10 md:mt-4 md:pt-20",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className:
                                            "mb-2 mt-0 pl-1 text-center md:mt-[-23px] md:pb-8",
                                          children: (0, n.jsx)("h2", {
                                            className:
                                              "text-[20px] leading-none tracking-[0.14em] text-[#555] sm:text-[24px] md:text-[24px] md:tracking-[0.18em] font-thin italic",
                                            children: "FOREVER LOVE",
                                          }),
                                        }),
                                        (0, n.jsx)(l.P.div, {
                                          initial: { opacity: 0, x: -80 },
                                          whileInView: { opacity: 1, x: 0 },
                                          viewport: { once: !0, amount: 0.2 },
                                          transition: {
                                            duration: 0.8,
                                            ease: "easeOut",
                                          },
                                          className:
                                            "relative min-h-[240px] flex-1 cursor-pointer overflow-hidden sm:min-h-[320px] md:min-h-0",
                                          onClick: () => T(u[0].src),
                                          children: (0, n.jsx)(m.default, {
                                            src: u[0].src,
                                            alt: "",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes:
                                              "(max-width: 768px) 100vw, 50vw",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "mt-1 flex h-full flex-col gap-2 md:mt-4",
                                      children: [
                                        (0, n.jsx)(l.P.div, {
                                          initial: { opacity: 0, x: 50 },
                                          whileInView: { opacity: 1, x: 0 },
                                          viewport: { once: !0, amount: 0.2 },
                                          transition: {
                                            duration: 0.7,
                                            delay: 0.15,
                                          },
                                          whileHover: { scale: 1.015 },
                                          className:
                                            "relative min-h-[115px] flex-1 cursor-pointer overflow-hidden sm:min-h-[155px] md:min-h-0",
                                          onClick: () => T(u[1].src),
                                          children: (0, n.jsx)(m.default, {
                                            src: u[1].src,
                                            alt: "",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes:
                                              "(max-width: 768px) 100vw, 50vw",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, n.jsx)(l.P.div, {
                                          initial: { opacity: 0, x: 50 },
                                          whileInView: { opacity: 1, x: 0 },
                                          viewport: { once: !0, amount: 0.2 },
                                          transition: {
                                            duration: 0.7,
                                            delay: 0.3,
                                          },
                                          whileHover: { scale: 1.015 },
                                          className:
                                            "relative min-h-[115px] flex-1 cursor-pointer overflow-hidden sm:min-h-[155px] md:min-h-0",
                                          onClick: () => T(u[2].src),
                                          children: (0, n.jsx)(m.default, {
                                            src: u[2].src,
                                            alt: "",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes:
                                              "(max-width: 768px) 100vw, 50vw",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "mx-auto mt-3 max-w-[360px] px-2 text-center text-[12px] font-normal leading-relaxed text-gray-700 sm:text-[14x] md:mt-7 md:text-[14px]",
                                  children:
                                    "It only takes a second to say I love you, but it will take a lifetime to show you how much",
                                }),
                              ],
                            }),
                            (0, n.jsx)(l.P.div, {
                              initial: { opacity: 0, x: 80 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: !0, amount: 0.2 },
                              transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut",
                              },
                              whileHover: { scale: 1.01 },
                              className:
                                "relative mt-[54px] h-[330px] cursor-pointer overflow-hidden sm:h-[420px] md:mt-0 md:h-[620px]",
                              onClick: () => T(u[3].src),
                              children: (0, n.jsx)(m.default, {
                                src: u[3].src,
                                alt: "",
                                fill: !0,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                A &&
                  (0, n.jsx)("section", {
                    className: "pb-12 md:pb-16",
                    children: (0, n.jsx)("div", {
                      className: "mx-auto max-w-[320px] px-4 sm:max-w-[360px]",
                      children: (0, n.jsxs)("div", {
                        className:
                          "relative overflow-hidden bg-[#f5f4f2] p-3 sm:p-4",
                        children: [
                          (0, n.jsx)("div", {
                            className: "absolute inset-0 opacity-[0.12]",
                            children: (0, n.jsx)(m.default, {
                              src: x[0].src,
                              alt: "",
                              fill: !0,
                              className: "scale-110 object-cover grayscale",
                              sizes: "(max-width: 768px) 100vw, 50vw",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className: "relative z-10",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "grid grid-cols-2 gap-2 sm:gap-3",
                                children: [
                                  (0, n.jsx)(l.P.div, {
                                    initial: { opacity: 0, x: -50 },
                                    whileInView: { opacity: 1, x: 0 },
                                    viewport: { once: !0, amount: 0.3 },
                                    transition: { duration: 0.8 },
                                    whileHover: { scale: 1.02 },
                                    className:
                                      "relative aspect-[3/4] cursor-pointer overflow-hidden border-[4px] border-white sm:border-[6px]",
                                    onClick: () => T(x[0].src),
                                    children: (0, n.jsx)(m.default, {
                                      src: x[1].src,
                                      alt: "",
                                      fill: !0,
                                      className: "object-cover",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsx)(l.P.div, {
                                    initial: { opacity: 0, x: 50 },
                                    whileInView: { opacity: 1, x: 0 },
                                    viewport: { once: !0, amount: 0.3 },
                                    transition: { duration: 0.8, delay: 0.15 },
                                    whileHover: { scale: 1.02 },
                                    className:
                                      "relative aspect-[3/4] cursor-pointer overflow-hidden border-[4px] border-white sm:border-[6px]",
                                    onClick: () => T(x[1].src),
                                    children: (0, n.jsx)(m.default, {
                                      src: x[2].src,
                                      alt: "",
                                      fill: !0,
                                      className: "object-cover",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsx)(l.P.div, {
                                initial: { opacity: 0, y: 30 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                transition: { duration: 0.8, delay: 0.3 },
                                className: "pb-2 pt-4 text-center sm:pt-5",
                                children: (0, n.jsxs)("h2", {
                                  className:
                                    "text-[18px] leading-[1.15] tracking-[0.06em] text-[#222] sm:text-[20px] md:text-[22px] md:tracking-[0.08em] font-serif",
                                  children: [
                                    "LOVE WHISPERS",
                                    (0, n.jsx)("br", {}),
                                    "THROUGH THE LEAVES",
                                  ],
                                }),
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "px-2 text-center text-[9px] italic tracking-wide text-[#777] sm:text-[10px]",
                                children:
                                  "In the quiet of the garden, love whispers through the leaves",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            })
          : null;
      }
      var e5 = a(36292),
        e3 = a.n(e5),
        e6 = a(74954),
        e8 = a.n(e6);
      function e7(e) {
        var t, a, i, s, r, o, c, d, u, x, h, p, g, v, f, b, j, y, N, w, k, C;
        let { data: T, side: P } = e,
          S =
            (null == T || null == (t = T.groom) ? void 0 : t.name) || "Đức Huy",
          I = null == T || null == (a = T.groom) ? void 0 : a.image,
          z = (null == T || null == (i = T.groom) ? void 0 : i.father) || "",
          D = (null == T || null == (s = T.groom) ? void 0 : s.mother) || "",
          V =
            (null == T || null == (r = T.bride) ? void 0 : r.name) ||
            "Triệu Vy",
          _ = null == T || null == (o = T.bride) ? void 0 : o.image,
          A = (null == T || null == (c = T.bride) ? void 0 : c.father) || "",
          E = (null == T || null == (d = T.bride) ? void 0 : d.mother) || "",
          L = (e) => (null == e ? void 0 : e.trim()),
          M = (null == T || null == (u = T.groom) ? void 0 : u.bio) || "",
          H = (null == T || null == (x = T.bride) ? void 0 : x.bio) || "";
        return (0, n.jsxs)(l.P.div, {
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, amount: 0.2 },
          transition: { duration: 1, ease: "easeOut" },
          className:
            "relative mx-auto w-full max-w-xl overflow-hidden py-4 select-none",
          children: [
            (0, n.jsx)("div", {
              className: "flex flex-col items-center justify-center mb-4",
              children: (0, n.jsxs)("div", {
                className:
                  "relative flex h-14 w-14 items-center justify-center rounded-full border border-secondary p-1",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute h-full w-full rounded-full border-t-2 border-secondary animate-spin-slow opacity-20",
                  }),
                  (0, n.jsx)("span", {
                    className: "text-2xl font-bold text-secondary",
                    children: "囍",
                  }),
                ],
              }),
            }),
            "groom" === P
              ? (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4 text-center mb-6 px-2",
                    children: [
                      (0, n.jsxs)(l.P.div, {
                        initial: { opacity: 0, x: -40 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: 0.2, duration: 0.8 },
                        className: "flex flex-col space-y-1",
                        children: [
                          (0, n.jsx)("h3", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-secondary",
                            ),
                            children: "Nh\xe0 Trai",
                          }),
                          L(z) &&
                            (0, n.jsxs)("p", {
                              className: "".concat(
                                e8().className,
                                " text-sm font-bold text-gray-900",
                              ),
                              children: [
                                (0, n.jsx)("span", {
                                  className: "font-medium",
                                  children: "\xd4ng: ",
                                }),
                                " ",
                                z,
                              ],
                            }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e8().className,
                              " text-sm font-bold text-gray-900",
                            ),
                            children: L(D)
                              ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "font-medium",
                                      children: "B\xe0: ",
                                    }),
                                    D,
                                  ],
                                })
                              : (0, n.jsx)("span", {
                                  className: "invisible",
                                  children: "B\xe0: placeholder",
                                }),
                          }),
                          L(
                            null == T || null == (h = T.groom)
                              ? void 0
                              : h.address,
                          ) &&
                            (0, n.jsx)("p", {
                              className: "".concat(
                                e8().className,
                                " text-xs text-gray-600 font-medium",
                              ),
                              children:
                                null == T || null == (p = T.groom)
                                  ? void 0
                                  : p.address,
                            }),
                        ],
                      }),
                      (0, n.jsxs)(l.P.div, {
                        initial: { opacity: 0, x: 40 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: 0.4, duration: 0.8 },
                        className: "flex flex-col space-y-1",
                        children: [
                          (0, n.jsx)("h3", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-secondary",
                            ),
                            children: "Nh\xe0 G\xe1i",
                          }),
                          L(A) &&
                            (0, n.jsxs)("p", {
                              className: "".concat(
                                e8().className,
                                " text-sm font-bold text-gray-900",
                              ),
                              children: [
                                (0, n.jsx)("span", {
                                  className: "font-medium",
                                  children: "\xd4ng: ",
                                }),
                                A,
                              ],
                            }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e8().className,
                              " text-sm font-bold text-gray-900",
                            ),
                            children: L(E)
                              ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "font-medium",
                                      children: "B\xe0: ",
                                    }),
                                    E,
                                  ],
                                })
                              : (0, n.jsx)("span", {
                                  className: "invisible",
                                  children: "B\xe0: placeholder",
                                }),
                          }),
                          L(
                            null == T || null == (g = T.bride)
                              ? void 0
                              : g.address,
                          ) &&
                            (0, n.jsx)("p", {
                              className: "".concat(
                                e8().className,
                                " text-xs text-gray-600 font-medium",
                              ),
                              children:
                                null == T || null == (v = T.bride)
                                  ? void 0
                                  : v.address,
                            }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4 text-center mb-6 px-2",
                    children: [
                      (0, n.jsxs)(l.P.div, {
                        initial: { opacity: 0, x: -40 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: 0.2, duration: 0.8 },
                        className: "flex flex-col space-y-1",
                        children: [
                          (0, n.jsx)("h3", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-secondary",
                            ),
                            children: "Nh\xe0 G\xe1i",
                          }),
                          L(A) &&
                            (0, n.jsxs)("p", {
                              className: "".concat(
                                e8().className,
                                " text-sm font-bold text-gray-900",
                              ),
                              children: [
                                (0, n.jsx)("span", {
                                  className: "font-medium",
                                  children: "\xd4ng: ",
                                }),
                                " ",
                                A,
                              ],
                            }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e8().className,
                              " text-sm font-bold text-gray-900",
                            ),
                            children: L(E)
                              ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "font-medium",
                                      children: "B\xe0: ",
                                    }),
                                    E,
                                  ],
                                })
                              : (0, n.jsx)("span", {
                                  className: "invisible",
                                  children: "B\xe0: placeholder",
                                }),
                          }),
                          L(
                            null == T || null == (f = T.bride)
                              ? void 0
                              : f.address,
                          ) &&
                            (0, n.jsx)("p", {
                              className: "".concat(
                                e8().className,
                                " text-xs text-gray-600 font-medium",
                              ),
                              children:
                                null == T || null == (b = T.bride)
                                  ? void 0
                                  : b.address,
                            }),
                        ],
                      }),
                      (0, n.jsxs)(l.P.div, {
                        initial: { opacity: 0, x: 40 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: 0.4, duration: 0.8 },
                        className: "flex flex-col space-y-1",
                        children: [
                          (0, n.jsx)("h3", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-secondary",
                            ),
                            children: "Nh\xe0 Trai",
                          }),
                          L(z) &&
                            (0, n.jsxs)("p", {
                              className: "".concat(
                                e8().className,
                                " text-sm font-bold text-gray-900",
                              ),
                              children: [
                                (0, n.jsx)("span", {
                                  className: "font-medium",
                                  children: "\xd4ng: ",
                                }),
                                " ",
                                z,
                              ],
                            }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e8().className,
                              " text-sm font-bold text-gray-900",
                            ),
                            children: L(D)
                              ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "font-medium",
                                      children: "B\xe0: ",
                                    }),
                                    D,
                                  ],
                                })
                              : (0, n.jsx)("span", {
                                  className: "invisible",
                                  children: "B\xe0: placeholder",
                                }),
                          }),
                          L(
                            null == T || null == (j = T.groom)
                              ? void 0
                              : j.address,
                          ) &&
                            (0, n.jsx)("p", {
                              className: "".concat(
                                e8().className,
                                " text-xs text-gray-600 font-medium",
                              ),
                              children:
                                null == T || null == (y = T.groom)
                                  ? void 0
                                  : y.address,
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
            "groom" === P
              ? (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("div", {
                    className:
                      "flex items-start justify-between bg-background px-2 md:px-6",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-col items-center p-2",
                        children: [
                          I &&
                            (0, n.jsx)("div", {
                              className:
                                "relative h-40 w-30 overflow-hidden  shadow-sm mb-3",
                              children: (0, n.jsx)(m.default, {
                                src: I,
                                alt: S,
                                fill: !0,
                                className: "object-cover scale-110",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          (0, n.jsx)("p", {
                            className:
                              "mb-2 text-[8px] uppercase tracking-[0.2em] text-white/70",
                            children:
                              null == T || null == (N = T.groom)
                                ? void 0
                                : N.rank,
                          }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-white transform",
                            ),
                            children: S,
                          }),
                          L(M) &&
                            (0, n.jsx)("div", {
                              className: "mt-2 min-h-[64px] flex items-start",
                              children: (0, n.jsx)("p", {
                                className: "".concat(
                                  e8().className,
                                  " max-w-[140px] text-center text-xs leading-5 text-white/80",
                                ),
                                children: M,
                              }),
                            }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "self-stretch flex items-center",
                        children: (0, n.jsx)("span", {
                          className: "".concat(
                            e3().className,
                            " text-2xl text-white/70 italic",
                          ),
                          children: "&",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex flex-col items-center p-2",
                        children: [
                          _ &&
                            (0, n.jsx)("div", {
                              className:
                                "relative h-40 w-30 overflow-hidden shadow-sm mb-3",
                              children: (0, n.jsx)(m.default, {
                                src: _,
                                alt: V,
                                fill: !0,
                                className: "object-cover scale-110",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          (0, n.jsx)("p", {
                            className:
                              "mb-2 text-[8px] uppercase tracking-[0.2em] text-white/70",
                            children:
                              null == T || null == (w = T.bride)
                                ? void 0
                                : w.rank,
                          }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-white transform",
                            ),
                            children: V,
                          }),
                          L(H) &&
                            (0, n.jsx)("div", {
                              className: "mt-2 min-h-[64px] flex items-start",
                              children: (0, n.jsx)("p", {
                                className: "".concat(
                                  e8().className,
                                  " max-w-[140px] text-center text-xs leading-5 text-white/80",
                                ),
                                children: H,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("div", {
                    className:
                      "flex items-start justify-between bg-background px-2 md:px-6",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-col items-center p-2",
                        children: [
                          _ &&
                            (0, n.jsx)("div", {
                              className:
                                "relative h-40 w-30 overflow-hidden shadow-sm mb-3",
                              children: (0, n.jsx)(m.default, {
                                src: _,
                                alt: V,
                                fill: !0,
                                className: "object-cover scale-110",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          (0, n.jsx)("p", {
                            className:
                              "mb-2 text-[8px] uppercase tracking-[0.2em] text-white/70",
                            children:
                              null == T || null == (k = T.bride)
                                ? void 0
                                : k.rank,
                          }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-white transform",
                            ),
                            children: V,
                          }),
                          L(H) &&
                            (0, n.jsx)("div", {
                              className: "mt-2 min-h-[64px] flex items-start",
                              children: (0, n.jsx)("p", {
                                className: "".concat(
                                  e8().className,
                                  " max-w-[140px] text-center text-xs leading-5 text-white/80",
                                ),
                                children: H,
                              }),
                            }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "self-stretch flex items-center",
                        children: (0, n.jsx)("span", {
                          className: "".concat(
                            e3().className,
                            " text-2xl text-white/70 italic",
                          ),
                          children: "&",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex flex-col items-center p-2",
                        children: [
                          I &&
                            (0, n.jsx)("div", {
                              className:
                                "relative h-40 w-30 overflow-hidden  shadow-sm mb-3",
                              children: (0, n.jsx)(m.default, {
                                src: I,
                                alt: S,
                                fill: !0,
                                className: "object-cover scale-110",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          (0, n.jsx)("p", {
                            className:
                              "mb-2 text-[8px] uppercase tracking-[0.2em] text-white/70",
                            children:
                              null == T || null == (C = T.groom)
                                ? void 0
                                : C.rank,
                          }),
                          (0, n.jsx)("p", {
                            className: "".concat(
                              e3().className,
                              " text-2xl text-white transform",
                            ),
                            children: S,
                          }),
                          L(M) &&
                            (0, n.jsx)("div", {
                              className: "mt-2 min-h-[64px] flex items-start",
                              children: (0, n.jsx)("p", {
                                className: "".concat(
                                  e8().className,
                                  " max-w-[140px] text-center text-xs leading-5 text-white/80",
                                ),
                                children: M,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
            (0, n.jsx)("div", {
              className: "mt-12 flex justify-center opacity-20",
              children: (0, n.jsx)("div", {
                className:
                  "h-[1px] w-32 bg-gradient-to-r from-transparent via-secondary to-transparent",
              }),
            }),
          ],
        });
      }
      var e9 = a(19139),
        te = a.n(e9);
      function tt(e) {
        let { weddingDate: t = "2026-05-18T08:00:00" } = e,
          [a, s] = (0, i.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
        (0, i.useEffect)(() => {
          let e = () => {
            let e =
              new Date(
                /^\d{4}-\d{2}-\d{2}$/.test(t) ? "".concat(t, "T00:00:00") : t,
              ).getTime() - Date.now();
            return e <= 0
              ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
              : {
                  days: Math.floor(e / 864e5),
                  hours: Math.floor((e / 36e5) % 24),
                  minutes: Math.floor((e / 1e3 / 60) % 60),
                  seconds: Math.floor((e / 1e3) % 60),
                };
          };
          s(e());
          let a = setInterval(() => {
            s(e());
          }, 1e3);
          return () => clearInterval(a);
        }, [t]);
        let l = [
          { label: "Ng\xe0y", value: a.days },
          { label: "Giờ", value: a.hours },
          { label: "Ph\xfat", value: a.minutes },
          { label: "Gi\xe2y", value: a.seconds },
        ];
        return (0, n.jsxs)("div", {
          className: "mx-auto my-6 w-full max-w-sm text-center select-none",
          children: [
            (0, n.jsx)("p", {
              className: "".concat(
                te().className,
                " mb-4 text-sm uppercase tracking-[0.2em] text-border font-semibold",
              ),
              children: "Đếm ngược đến ng\xe0y cưới",
            }),
            (0, n.jsx)("div", {
              className: "flex justify-center gap-3",
              children: l.map((e, t) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: "flex flex-col items-center",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "flex h-16 w-14 items-center justify-center rounded-xl bg-background text-2xl font-medium tracking-tight text-[#fdfbf7] shadow-[0_4px_14px_rgba(128,24,24,0.15)] border border-border",
                        children: String(e.value).padStart(2, "0"),
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "mt-2 text-[11px] font-medium tracking-wider text-border",
                        children: e.label,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      }
      var ta = a(45367),
        tn = a.n(ta),
        ti = a(51331),
        ts = a.n(ti);
      function tl(e) {
        let {
          image: t,
          brideName: a,
          groomName: i,
          title: s,
          description: r,
        } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "relative mx-auto w-full max-w-2xl overflow-hidden bg-background shadow-2xl select-none",
            children: [
              (0, n.jsxs)("div", {
                className: "relative aspect-[3/4] w-full",
                children: [
                  (0, n.jsx)(m.default, {
                    src:
                      t ||
                      "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779161912/495124772_1248101253348957_299538864696859072_n_v8yda7.jpg",
                    alt: "Thank you from the couple",
                    fill: !0,
                    className: "object-cover object-top",
                    sizes: "(max-width: 768px) 100vw, 50vw",
                    loading: "lazy",
                    unoptimized: !0,
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent",
                  }),
                  (0, n.jsx)("div", {
                    className: "absolute bottom-4 left-0 right-0 text-center",
                    children: (0, n.jsx)("p", {
                      className: "".concat(
                        tn().className,
                        " text-[26px] text-white/90",
                      ),
                      children: s || "Rất h\xe2n hạnh được đ\xf3n tiếp",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "bg-background pb-12 pt-6 text-center",
                children: [
                  (0, n.jsx)("h2", {
                    className: "".concat(
                      ts().className,
                      " text-[54px] font-medium tracking-[0.25em] text-white leading-none mr-[-0.25em]",
                    ),
                    children: "THANK YOU",
                  }),
                  (0, n.jsx)("div", {
                    className: "mx-auto my-5 h-[1px] w-16 bg-white/20",
                  }),
                  (0, n.jsx)("p", {
                    className: "".concat(
                      ts().className,
                      " text-[13px] uppercase tracking-[0.4em] text-white/60 px-6 font-medium",
                    ),
                    children:
                      r ||
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          "Hẹn gặp bạn trong ng\xe0y ",
                          (0, n.jsx)("br", { className: "block md:hidden" }),
                          "trọng đại!!!",
                        ],
                      }),
                  }),
                ],
              }),
              (0, n.jsx)(l.P.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: "my-10 h-px bg-background/20 mb-0",
              }),
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "flex flex-col items-center justify-between gap-4 text-center text-sm text-background/60 p-4",
                children: (0, n.jsxs)("div", {
                  className:
                    "text-xs text-background/40 text-center md:text-right space-x-2",
                  children: [
                    (0, n.jsxs)("span", {
                      children: [
                        "Wedding Invitation by",
                        " ",
                        (0, n.jsx)("a", {
                          href: "https://suns-wedding.vercel.app/",
                          target: "_blank",
                          className:
                            "hover:text-background transition underline",
                          children: "Suns",
                        }),
                        " ",
                        "with love •",
                        " ",
                        (0, n.jsx)("a", {
                          href: "https://zalo.me/0389183498",
                          target: "_blank",
                          className: "hover:text-background transition",
                          children: "Zalo",
                        }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      className: "text-background/30",
                      children: "|",
                    }),
                    (0, n.jsx)("a", {
                      href: "https://tiktok.com/@thiepcuoionlinesunsss",
                      target: "_blank",
                      className: "hover:text-background transition",
                      children: "TikTok",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var tr = a(67344),
        to = a.n(tr);
      function tc(e) {
        let { item: t, active: a } = e,
          [s, r] = (0, i.useState)(!1),
          o = t.message.length > 140;
        return (0, n.jsxs)(l.P.div, {
          whileHover: { y: -8 },
          animate: {
            boxShadow: a
              ? "0 20px 40px rgba(0,0,0,0.12)"
              : "0 10px 20px rgba(0,0,0,0.05)",
          },
          className:
            " relative rounded-xl bg-card p-8 shadow-lg min-h-[180px] transition-all duration-300 ease-out group ",
          children: [
            (0, n.jsx)("div", {
              className: "absolute -top-4 left-6",
              children: (0, n.jsx)("div", {
                className:
                  "flex h-10 w-10 items-center justify-center rounded-full bg-ring shadow-lg transition-transform duration-300 group-hover:scale-110",
                children: (0, n.jsx)(ed.A, {
                  className: "h-5 w-5 text-primary-foreground",
                }),
              }),
            }),
            (0, n.jsx)("p", {
              className:
                " mb-6 mt-4 text-sm leading-relaxed italic text-muted-foreground transition-colors duration-300 group-hover:text-background ",
              children: s || !o ? t.message : t.message.slice(0, 90) + "...",
            }),
            o &&
              (0, n.jsx)("button", {
                onClick: () => r(!s),
                className:
                  " text-xs text-primary hover:underline transition-all duration-200 group-hover:tracking-wide ",
                children: s ? "Thu gọn" : "Xem th\xeam",
              }),
            (0, n.jsx)("div", {
              className: "mt-4 border-t border-border pt-4",
              children: (0, n.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "font-medium text-muted-foreground transition-colors text-sm",
                        children: t.name,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: t.relationship,
                      }),
                    ],
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[11px] text-muted-foreground/70 whitespace-nowrap",
                    children: (0, T.Yq)(t.createdAt),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function td(e) {
        let { refreshKey: t, weddingId: a, coverImage: s } = e,
          [r, o] = (0, i.useState)([]),
          c = (0, i.useRef)(null),
          d = (0, z.W)(c, { once: !0 }),
          m = (0, i.useRef)(null),
          [u, x] = (0, i.useState)(!1),
          [h, p] = (0, i.useState)([]),
          [g, v] = (0, i.useState)(1),
          [f, b] = (0, i.useState)(!0),
          [j, y] = (0, i.useState)(!1),
          [N, w] = (0, i.useState)(0);
        (0, i.useEffect)(() => {
          document.body.style.overflow = u ? "hidden" : "auto";
        }, [u]);
        let k = async function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (j) return;
            y(!0);
            let n = await fetch(
                "/api/rsvp?weddingId="
                  .concat(a, "&page=")
                  .concat(e, "&limit=10"),
              ),
              i = await n.json();
            (p((e) => (t ? i.data : [...e, ...i.data])),
              w(i.total),
              b(i.hasMore),
              y(!1));
          },
          [C, P] = (0, i.useState)(0),
          S = async () => {
            let e = await fetch(
                "/api/rsvp?weddingId=".concat(a, "&page=1&limit=3"),
              ),
              t = await e.json();
            (o(t.data), w(t.total));
          };
        return (
          (0, i.useEffect)(() => {
            if (r.length < 2) return;
            let e = setInterval(() => {
              P((e) => (e + 1) % Math.min(3, r.length));
            }, 2e3);
            return () => clearInterval(e);
          }, [r.length]),
          (0, i.useEffect)(() => {
            document.body.style.overflow = u ? "hidden" : "auto";
          }, [u]),
          (0, i.useEffect)(() => {
            (S(), p([]), v(1), b(!0));
          }, [t, a]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("section", {
                id: "wishes",
                ref: c,
                className: "py-20 md:py-32 bg-background",
                children: (0, n.jsxs)("div", {
                  className: "mx-auto max-w-6xl px-6",
                  children: [
                    (0, n.jsx)(l.P.div, {
                      initial: { opacity: 0, y: 30 },
                      animate: d ? { opacity: 1, y: 0 } : {},
                      className: "text-center mb-12",
                      children: (0, n.jsx)("h2", {
                        className: "".concat(
                          to().className,
                          "\n              mt-2\n              text-[30px]\n              leading-none\n              text-white\n              md:text-[58px]\n              text-center\n              mb-6\n            ",
                        ),
                        children: "Những lời ch\xfac tốt đẹp",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "grid md:grid-cols-3 gap-6",
                      children: r.map((e, t) =>
                        (0, n.jsx)(
                          l.P.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: {
                              opacity: +!!d,
                              y: 20 * !d,
                              scale: C === t ? 1.03 : 1,
                              translateY: C === t ? -12 : 0,
                            },
                            transition: {
                              opacity: { duration: 0.6 },
                              y: { duration: 0.6 },
                              scale: { duration: 0.5 },
                              translateY: { duration: 0.5 },
                            },
                            children: (0, n.jsx)(tc, {
                              item: e,
                              active: C === t,
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-8 flex flex-col items-center gap-3",
                      children: [
                        (0, n.jsxs)("button", {
                          onClick: async () => {
                            (x(!0), 0 === h.length && (v(1), await k(1, !0)));
                          },
                          className:
                            " cursor-pointer rounded-full bg-primary px-6 py-3 text-xs text-white shadow transition-all duration-300 ease-out hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 ",
                          children: ["XEM TẤT CẢ (", N, ")"],
                        }),
                        (0, n.jsxs)("button", {
                          onClick: () => {
                            var e;
                            null == (e = document.getElementById("rsvp")) ||
                              e.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            " cursor-pointer inline-flex items-center gap-2 text-sm text-white/90 transition-opacity duration-300 hover:opacity-80 ",
                          children: [
                            (0, n.jsx)(l.P.span, {
                              animate: { y: [0, -2, 0], rotate: [-5, 5, -5] },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: "✨",
                            }),
                            (0, n.jsx)(l.P.span, {
                              animate: { y: [0, -1.5, 0] },
                              transition: {
                                duration: 2.2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              className: "underline",
                              children:
                                "Gửi lời ch\xfac cho c\xf4 d\xe2u ch\xfa rể",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              u &&
                (0, n.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4",
                  onClick: (e) => {
                    m.current && !m.current.contains(e.target) && x(!1);
                  },
                  children: (0, n.jsxs)("div", {
                    ref: m,
                    className:
                      "w-full max-w-6xl h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl flex relative",
                    children: [
                      (0, n.jsx)("button", {
                        onClick: () => x(!1),
                        className:
                          "cursor-pointer absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60",
                        children: "✕",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          " hidden md:block relative flex-[0_0_60%] max-w-[580px] h-full overflow-hidden text-center ",
                        children: [
                          (0, n.jsx)("img", {
                            src: s,
                            className: "w-full h-full object-cover",
                          }),
                          (0, n.jsx)("div", {
                            className: "absolute inset-0 bg-black/10",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex-1 min-w-0 bg-background flex flex-col h-full overflow-hidden",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "shrink-0 bg-background p-6 border-b border-border/40",
                            children: [
                              (0, n.jsx)("h2", {
                                className: "text-xl font-serif",
                                children: "\uD83D\uDC8C Lời ch\xfac",
                              }),
                              (0, n.jsxs)("p", {
                                className: "text-xs text-foreground mt-1",
                                children: [
                                  "Tổng cộng ",
                                  (0, n.jsx)("strong", { children: N }),
                                  " lời ch\xfac • Cuộn xuống để xem th\xeam",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            onScroll: (e) => {
                              let t = e.currentTarget;
                              if (
                                t.scrollTop + t.clientHeight >=
                                  t.scrollHeight - 50 &&
                                f &&
                                !j
                              ) {
                                let e = g + 1;
                                (v(e), k(e));
                              }
                            },
                            children: [
                              h.map((e, t) =>
                                (0, n.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "mb-4 p-4 rounded-xl bg-card shadow-sm",
                                    children: [
                                      (0, n.jsx)("p", {
                                        className:
                                          "text-sm italic leading-relaxed text-muted-foreground",
                                        children: e.message,
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "my-3 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "flex items-end justify-between gap-3",
                                        children: [
                                          (0, n.jsxs)("div", {
                                            children: [
                                              (0, n.jsx)("p", {
                                                className:
                                                  "text-sm font-semibold text-muted-foreground",
                                                children: e.name,
                                              }),
                                              (0, n.jsx)("p", {
                                                className:
                                                  "mt-1 text-xs text-muted-foreground",
                                                children: e.relationship,
                                              }),
                                            ],
                                          }),
                                          e.createdAt &&
                                            (0, n.jsx)("p", {
                                              className:
                                                "shrink-0 text-[11px] text-muted-foreground",
                                              children: (0, T.Yq)(e.createdAt),
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                              j &&
                                (0, n.jsx)("p", {
                                  className:
                                    "text-center text-xs text-muted-foreground py-4",
                                  children: "Đang tải...",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      var tm = a(34094),
        tu = a.n(tm);
      function tx(e) {
        var t, a, s, r, o, c, d, u, x, h, p, g, v;
        let {
            weddingId: f,
            onSuccess: b,
            theme: j,
            people: y,
            brideName: N,
            groomName: w,
            thankYouImage: k,
            features: C,
          } = e,
          P = null == (c = null == C ? void 0 : C.requireInvitedBy) || c,
          S = null == (d = null == C ? void 0 : C.requireAttending) || d,
          I = null == (u = null == C ? void 0 : C.requireNoOfAttendee) || u,
          D = null == (x = null == C ? void 0 : C.showRSVPField) || x,
          V = null == (h = null == C ? void 0 : C.showInvitedBy) || h,
          _ = null == (p = null == C ? void 0 : C.showNickname) || p,
          [E, L] = (0, i.useState)(!1),
          M = (0, i.useRef)(null),
          H = (0, i.useRef)(null),
          B = (0, i.useRef)(null),
          [q, F] = (0, i.useState)(!1),
          R = (0, z.W)(H, { once: !0, margin: "-100px" }),
          [W, G] = (0, i.useState)(!1),
          [O, Q] = (0, i.useState)({
            name: "",
            nickname: "",
            invitedBy: "",
            guests: "",
            attending: "",
            message: "",
          }),
          U = async (e) => {
            if ((e.preventDefault(), !E)) {
              if (
                !O.name ||
                (P && !O.invitedBy) ||
                (S && !O.attending) ||
                (I && "yes" === O.attending && !O.guests) ||
                !O.message
              )
                return void alert(
                  "".concat(
                    (0, T.as)(j),
                    " Vui l\xf2ng điền đầy đủ th\xf4ng tin để gửi lời ch\xfac nh\xe9",
                  ),
                );
              try {
                (L(!0),
                  await fetch("/api/rsvp", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      weddingId: f,
                      name: O.name,
                      nickname: O.nickname,
                      comingFrom: O.invitedBy,
                      attending: O.attending,
                      numberOfGuests: Number(O.guests),
                      message: O.message,
                    }),
                  }),
                  null == b || b(),
                  G(!0),
                  setTimeout(() => {
                    var e;
                    null == (e = document.getElementById("rsvp")) ||
                      e.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100));
              } catch (e) {
                console.error(e);
              } finally {
                L(!1);
              }
            }
          };
        (0, i.useEffect)(() => {
          let e = (e) => {
            M.current && !M.current.contains(e.target) && F(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
          );
        }, []);
        let Y = (e) => {
            let { name: t, value: a } = e.target;
            if ("attending" === t) {
              if ("maybe" === a || "no" === a)
                return void Q({ ...O, attending: a, guests: "0" });
              if ("yes" === a)
                return void Q({ ...O, attending: a, guests: "" });
            }
            Q({ ...O, [t]: a });
          },
          K =
            ((g = O.attending),
            (v = O.name),
            {
              yes: {
                title: "Cảm ơn bạn rất nhiều "
                  .concat(v ? ", ".concat(v) : "", " ")
                  .concat((0, T.as)(j)),
                desc: "Lời ch\xfac v\xe0 sự hiện diện của bạn l\xe0 niềm hạnh ph\xfac của tụi m\xecnh. Hẹn gặp bạn trong ng\xe0y đặc biệt nh\xe9!",
              },
              maybe: {
                title: "Cảm ơn bạn rất nhiều "
                  .concat(v ? ", ".concat(v) : "", " ")
                  .concat((0, T.as)(j)),
                desc: "Tụi m\xecnh đ\xe3 nhận được lời ch\xfac của bạn rồi. Hy vọng sẽ sắp xếp được để gặp bạn trong ng\xe0y vui nh\xe9!",
              },
              no: {
                title: "Cảm ơn bạn rất nhiều "
                  .concat(v ? ", ".concat(v) : "", " ")
                  .concat((0, T.as)(j)),
                desc: "D\xf9 bạn kh\xf4ng thể tham dự, lời ch\xfac của bạn vẫn l\xe0 điều rất \xfd nghĩa với tụi m\xecnh.",
              },
            }[g] || {
              title: "Cảm ơn bạn "
                .concat((0, T.as)(j))
                .concat(v ? ", ".concat(v) : ""),
              desc: "Lời ch\xfac của bạn đ\xe3 được gửi đến tụi m\xecnh rồi.",
            }),
          X =
            (null == (a = y.find((e) => "groom" === e.value)) ||
            null == (t = a.img)
              ? void 0
              : t.trim()) || "",
          Z =
            (null == (r = y.find((e) => "bride" === e.value)) ||
            null == (s = r.img)
              ? void 0
              : s.trim()) || "",
          $ =
            (null == (o = y.find((e) => "both" === e.value))
              ? void 0
              : o.img) || "",
          J = !X && !Z,
          ee =
            "w-full rounded-xl border border-border-input bg-cream px-4 py-3 text-color-input placeholder:text-[#b8b1a8] focus:outline-none focus:ring-2 focus:ring-focus-ring/40 focus:border-focus-ring transition";
        return (0, n.jsx)("section", {
          id: "rsvp",
          className: "py-20 md:py-32",
          ref: H,
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-3xl px-6",
            children: [
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 40 },
                animate: R ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "mb-16 text-center",
                children: [
                  (0, n.jsx)("h2", {
                    className: "".concat(
                      tu().className,
                      "\n              mt-2\n              text-[30px]\n              leading-none\n              text-secondary\n              md:text-[58px]\n              text-center\n              mb-6\n            ",
                    ),
                    children: "Gửi lời ch\xfac v\xe0 x\xe1c nhận tham dự",
                  }),
                  (0, n.jsx)("p", {
                    className: "mt-4 text-muted-foreground text-sm",
                    children:
                      "Mỗi lời ch\xfac của bạn đều l\xe0 niềm hạnh ph\xfac với ch\xfang m\xecnh.",
                  }),
                ],
              }),
              W
                ? (0, n.jsxs)(l.P.div, {
                    className: "rounded-2xl bg-card p-12 text-center shadow-lg",
                    children: [
                      (0, n.jsx)(l.P.div, {
                        initial: { opacity: 0, scale: 0.9 },
                        whileInView: { opacity: 1, scale: 1 },
                        transition: { duration: 1 },
                        viewport: { once: !0 },
                        className:
                          "mx-auto relative mb-4 h-50 w-50 overflow-hidden rounded-full shadow-xl md:h-70 md:w-70",
                        children: (0, n.jsx)(m.default, {
                          src: k,
                          alt: "Bride and Groom",
                          fill: !0,
                          className: "object-cover",
                          sizes: "(max-width: 768px) 100vw, 50vw",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, n.jsx)("h3", {
                        className:
                          "font-serif md:text-2xl text-xl text-muted-foreground",
                        children: K.title,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-muted-foreground",
                        children: K.desc,
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "mt-6 flex items-center justify-center gap-2 text-primary",
                        children: [
                          (0, n.jsx)(A.A, {
                            className: "h-5 w-5 fill-primary",
                          }),
                          (0, n.jsxs)("span", {
                            className: "italic",
                            children: [(0, T.TU)(w), " & ", (0, T.TU)(N)],
                          }),
                          (0, n.jsx)(A.A, {
                            className: "h-5 w-5 fill-primary",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-8 text-center",
                        children: (0, n.jsxs)(l.P.button, {
                          type: "button",
                          animate: { y: [0, -3, 0] },
                          transition: {
                            duration: 2.2,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          whileTap: { scale: 0.97 },
                          onClick: () => {
                            var e;
                            null == (e = document.getElementById("wishes")) ||
                              e.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            " group cursor-pointer inline-flex items-center gap-2 text-sm text-primary transition-opacity duration-300 hover:opacity-80 ",
                          children: [
                            (0, n.jsx)(l.P.span, {
                              animate: { rotate: [-6, 6, -6] },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: "\uD83D\uDC8C",
                            }),
                            (0, n.jsx)("span", {
                              className:
                                " relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-primary/40  ",
                              children: "Xem những lời ch\xfac đ\xe3 gửi",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, n.jsxs)(l.P.form, {
                    noValidate: !0,
                    initial: { opacity: 0, y: 40 },
                    animate: R ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8, delay: 0.2 },
                    onSubmit: U,
                    className: "rounded-2xl bg-card p-8 shadow-lg md:p-12",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "grid gap-6 md:grid-cols-2 text-muted-foreground",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "md:col-span-2",
                            children: [
                              (0, n.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                children: "Lời Ch\xfac \uD83D\uDC8C",
                              }),
                              (0, n.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, n.jsx)("textarea", {
                                    ref: B,
                                    name: "message",
                                    rows: 4,
                                    value: O.message,
                                    onChange: Y,
                                    className: ee + " resize-none",
                                    placeholder:
                                      "Viết v\xe0i lời ch\xfac thật dễ thương cho tụi m\xecnh nh\xe9...",
                                    required: !0,
                                    onInvalid: (e) =>
                                      e.currentTarget.setCustomValidity(
                                        "".concat(
                                          (0, T.as)(j),
                                          " Bạn viết v\xe0i lời ch\xfac cho tụi m\xecnh nh\xe9",
                                        ),
                                      ),
                                    onInput: (e) =>
                                      e.currentTarget.setCustomValidity(""),
                                  }),
                                  (0, n.jsx)("div", {
                                    ref: M,
                                    className:
                                      "absolute bottom-14 right-0 z-50",
                                    children:
                                      q &&
                                      (0, n.jsx)(ef.Ay, {
                                        onEmojiClick: (e) => {
                                          ((e) => {
                                            let t = B.current;
                                            if (!t) return;
                                            let a = t.selectionStart,
                                              n = t.selectionEnd,
                                              i = O.message,
                                              s =
                                                i.substring(0, a) +
                                                e +
                                                i.substring(n);
                                            (Q({ ...O, message: s }),
                                              setTimeout(() => {
                                                (t.focus(),
                                                  (t.selectionStart =
                                                    t.selectionEnd =
                                                      a + e.length));
                                              }, 0));
                                          })(e.emoji);
                                        },
                                        theme: ef.Sx.LIGHT,
                                      }),
                                  }),
                                  (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: () => F(!q),
                                    className:
                                      "absolute bottom-3 right-3 text-xl hover:scale-110 transition cursor-pointer",
                                    title: "Ch\xe8n biểu tượng",
                                    children: (0, n.jsx)(eb.A, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          V &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                  (0, n.jsx)("label", {
                                    className: "mb-3 block text-sm font-medium",
                                    children: "Bạn l\xe0 kh\xe1ch mời của ai?",
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: y.map((e) => {
                                      let t = O.invitedBy === e.value,
                                        a =
                                          J &&
                                          ("groom" === e.value ||
                                            "bride" === e.value)
                                            ? $
                                            : e.img;
                                      return (0, n.jsxs)(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () =>
                                            Q({ ...O, invitedBy: e.value }),
                                          className:
                                            "cursor-pointer relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ".concat(
                                              t
                                                ? "ring-2 ring-focus-ring scale-[1.05] z-10"
                                                : O.invitedBy
                                                  ? "opacity-40 scale-95"
                                                  : "hover:scale-[1.02]",
                                            ),
                                          children: [
                                            a &&
                                              (0, n.jsx)("img", {
                                                src: a,
                                                className:
                                                  "absolute inset-0 h-full w-full object-cover",
                                                alt: e.label,
                                              }),
                                            (0, n.jsx)("div", {
                                              className:
                                                "absolute inset-0 ".concat(
                                                  t
                                                    ? "bg-black/25"
                                                    : "bg-black/35",
                                                ),
                                            }),
                                            (0, n.jsx)("div", {
                                              className:
                                                "absolute bottom-2 left-0 right-0 text-center",
                                              children: (0, n.jsx)("span", {
                                                className:
                                                  "text-white text-sm font-medium",
                                                children: e.label,
                                              }),
                                            }),
                                          ],
                                        },
                                        e.value,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          (0, n.jsxs)("div", {
                            className: "md:col-span-2",
                            children: [
                              (0, n.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                children: "T\xean của bạn",
                              }),
                              (0, n.jsx)("input", {
                                name: "name",
                                required: !0,
                                value: O.name,
                                onChange: Y,
                                className: ee,
                                placeholder: "Nguyễn Văn Huy",
                                onInvalid: (e) =>
                                  e.currentTarget.setCustomValidity(
                                    "".concat(
                                      (0, T.as)(j),
                                      " Vui l\xf2ng điền t\xean của bạn nh\xe9",
                                    ),
                                  ),
                                onInput: (e) =>
                                  e.currentTarget.setCustomValidity(""),
                              }),
                            ],
                          }),
                          _ &&
                            (0, n.jsx)(n.Fragment, {
                              children: (0, n.jsxs)("div", {
                                className: "md:col-span-2",
                                children: [
                                  (0, n.jsx)("label", {
                                    className: "mb-2 block text-sm font-medium",
                                    children: "Biệt danh",
                                  }),
                                  (0, n.jsx)("input", {
                                    required: !0,
                                    name: "nickname",
                                    value: O.nickname,
                                    onChange: Y,
                                    className: ee,
                                    placeholder:
                                      "VD: Bạn cấp 3 của c\xf4 d\xe2u, Bạn đồng nghiệp của ch\xfa rể ...",
                                    onInvalid: (e) =>
                                      e.currentTarget.setCustomValidity(
                                        "".concat(
                                          (0, T.as)(j),
                                          " Bạn nhập gi\xfap tụi m\xecnh biệt danh nh\xe9",
                                        ),
                                      ),
                                    onInput: (e) =>
                                      e.currentTarget.setCustomValidity(""),
                                  }),
                                ],
                              }),
                            }),
                          D &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("label", {
                                      className:
                                        "mb-2 block text-sm font-medium",
                                      children:
                                        "Bạn c\xf3 thể tham dự kh\xf4ng?",
                                    }),
                                    (0, n.jsxs)("select", {
                                      name: "attending",
                                      value: O.attending,
                                      onChange: Y,
                                      className: ee,
                                      required: !0,
                                      onInvalid: (e) =>
                                        e.currentTarget.setCustomValidity(
                                          "".concat(
                                            (0, T.as)(j),
                                            " Bạn cho tụi m\xecnh biết bạn c\xf3 thể tham dự kh\xf4ng nh\xe9",
                                          ),
                                        ),
                                      onInput: (e) =>
                                        e.currentTarget.setCustomValidity(""),
                                      children: [
                                        (0, n.jsx)("option", {
                                          value: "",
                                          disabled: !0,
                                          children: "-- Chọn c\xe2u trả lời --",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "yes",
                                          children:
                                            "✨ Chắc chắn rồi, m\xecnh sẽ đến",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "maybe",
                                          children:
                                            "\uD83E\uDD0D M\xecnh sẽ cố gắng sắp xếp",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "no",
                                          children:
                                            "\uD83D\uDC8C Rất tiếc m\xecnh kh\xf4ng thể tham dự",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("label", {
                                      className:
                                        "mb-2 block text-sm font-medium",
                                      children: "Số người tham dự",
                                    }),
                                    (0, n.jsxs)("select", {
                                      name: "guests",
                                      value: O.guests,
                                      onChange: Y,
                                      className: ""
                                        .concat(ee, " ")
                                        .concat(
                                          "yes" !== O.attending
                                            ? "opacity-60 cursor-not-allowed"
                                            : "",
                                        ),
                                      disabled: "yes" !== O.attending,
                                      required: "yes" === O.attending,
                                      children: [
                                        (0, n.jsx)("option", {
                                          value: "",
                                          disabled: !0,
                                          children: "-- Số người --",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "1",
                                          children: "1 người",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "2",
                                          children: "2 người",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "3",
                                          children: "3 người",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "4",
                                          children: "4 người",
                                        }),
                                        (0, n.jsx)("option", {
                                          value: "5",
                                          children: "5+ người",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, n.jsx)("button", {
                        type: "submit",
                        disabled: E,
                        className:
                          "\n    mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-medium transition text-sm\n    ".concat(
                            E
                              ? "bg-background/50 text-white cursor-not-allowed"
                              : "bg-background text-white hover:bg-muted hover:text-foreground",
                            "\n  ",
                          ),
                        children: E
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(l.P.div, {
                                  className:
                                    "h-4 w-4 rounded-full border-2 border-white border-t-transparent",
                                  animate: { rotate: 360 },
                                  transition: {
                                    repeat: 1 / 0,
                                    duration: 0.8,
                                    ease: "linear",
                                  },
                                }),
                                "ĐANG GỬI ...",
                              ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(ev.A, { className: "h-4 w-4" }),
                                "GỬI LỜI CH\xdaC",
                              ],
                            }),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      let th = [
        {
          title: "Một đời",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-1_lwrauo.mp3",
          artist: "",
        },
        {
          title: "Ta l\xe0 của nhau",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-2_kb8xxi.mp3",
          artist: "",
        },
        {
          title: "Lễ đường",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-3_ypjmkf.mp3",
          artist: "",
        },
      ];
      function tp(e) {
        let { playlist: t, autoPlay: a } = e,
          s = (0, i.useRef)(null),
          [o, c] = (0, i.useState)(!1),
          [d, m] = (0, i.useState)(!1),
          [u, x] = (0, i.useState)(0),
          [h, p] = (0, i.useState)("0:00"),
          [g, v] = (0, i.useState)("0:00"),
          [f, b] = (0, i.useState)(0),
          [j, y] = (0, i.useState)(!1),
          N = (0, i.useRef)(null),
          w = t || th,
          k = (0, i.useRef)(!1),
          C = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let tryPlay = () => {
            if (N.current) {
              let e = N.current;
              e.volume = 0.7;
              e.play()
                .then(() => {
                  c(!0);
                })
                .catch(() => {});
            }
          };
          tryPlay();
          let evts = ["touchstart", "touchend", "pointerdown", "click", "scroll"];
          let handler = () => tryPlay();
          evts.forEach((evt) => window.addEventListener(evt, handler, { once: true, passive: true }));
          return () => {
            evts.forEach((evt) => window.removeEventListener(evt, handler));
          };
        }, [a]);
        let T = (e) => {
          let t = Math.floor(e / 60),
            a = Math.floor(e % 60);
          return "".concat(t, ":").concat(a.toString().padStart(2, "0"));
        };
        (0, i.useEffect)(() => {
          let e = N.current;
          if (!e) return;
          let t = () => {
              e.duration &&
                (x((e.currentTime / e.duration) * 100), p(T(e.currentTime)));
            },
            a = () => {
              v(T(e.duration));
            },
            n = async () => {
              let e = N.current;
              e && (1 === w.length ? ((e.currentTime = 0), e.play()) : S());
            };
          return (
            e.addEventListener("timeupdate", t),
            e.addEventListener("loadedmetadata", a),
            e.addEventListener("ended", n),
            () => {
              (e.removeEventListener("timeupdate", t),
                e.removeEventListener("loadedmetadata", a),
                e.removeEventListener("ended", n));
            }
          );
        }, []);
        let P = async () => {
            let e = N.current;
            if (e)
              if (o) (e.pause(), (C.current = !0), c(!1));
              else
                try {
                  (await e.play(), c(!0));
                } catch (e) {
                  console.log("Play failed");
                }
          },
          S = () => {
            b((e) => (e + 1) % w.length);
          };
        return (
          (0, i.useEffect)(() => {
            (x(0), p("0:00"));
          }, [f]),
          (0, i.useEffect)(() => {
            let e = (e) => {
              s.current && !s.current.contains(e.target) && m(!1);
            };
            return (
              d && document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [d]),
          (0, i.useEffect)(() => {
            let e = async () => {
              if (k.current || C.current) return;
              k.current = !0;
              let e = N.current;
              if (e)
                try {
                  ((e.volume = 0.7), await e.play(), c(!0));
                } catch (e) {
                  console.log("Autoplay failed");
                }
            };
            return (
              document.addEventListener("pointerdown", e),
              () => {
                document.removeEventListener("pointerdown", e);
              }
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("audio", {
                ref: N,
                src: w[f].src,
                preload: "metadata",
                onLoadedMetadata: () => {
                  if (o) {
                    var e;
                    null == (e = N.current) || e.play();
                  }
                },
              }),
              (0, n.jsx)(l.P.div, {
                ref: s,
                initial: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 1 },
                style: { display: "none" },
                className: "fixed right-4 bottom-6 z-50 hidden",
                children: (0, n.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, n.jsx)(r.N, {
                      children:
                        j &&
                        !d &&
                        (0, n.jsx)(l.P.div, {
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: {
                            opacity: { duration: 0.25 },
                            x: { duration: 0.25 },
                          },
                          className:
                            " relative px-3 py-1 rounded-[5px] bg-white backdrop-blur-md border border-white/20 text-primary text-sm shadow-md whitespace-nowrap  after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:w-2 after:h-2 after:rotate-45 after:bg-white after:border-r after:border-b after:border-white/20 ",
                          children: o
                            ? "Đang ph\xe1t nhạc \uD83C\uDFB5"
                            : "Bật nhạc \uD83C\uDFB6",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col items-end gap-2",
                      children: [
                        (0, n.jsx)(r.N, {
                          children:
                            d &&
                            (0, n.jsxs)(l.P.div, {
                              initial: { opacity: 0, y: 10, scale: 0.9 },
                              animate: { opacity: 1, y: 0, scale: 1 },
                              exit: { opacity: 0, y: 10, scale: 0.9 },
                              transition: { duration: 0.2 },
                              className:
                                "bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl p-4 shadow-xl w-64",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex items-center gap-3 mb-3",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5 text-foreground",
                                        fill: "var(--foreground)",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        (0, n.jsx)("p", {
                                          className:
                                            "font-serif text-sm text-foreground truncate",
                                          children: w[f].title,
                                        }),
                                        (0, n.jsx)("p", {
                                          className: "text-xs text-foreground",
                                          children: w[f].artist,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "h-1.5 bg-secondary rounded-full cursor-pointer mb-2 group",
                                  onClick: (e) => {
                                    let t = N.current;
                                    if (!t) return;
                                    let a =
                                      e.currentTarget.getBoundingClientRect();
                                    t.currentTime =
                                      ((e.clientX - a.left) / a.width) *
                                      t.duration;
                                  },
                                  children: (0, n.jsx)(l.P.div, {
                                    className:
                                      "h-full bg-primary rounded-full relative",
                                    style: { width: "".concat(u, "%") },
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                                    }),
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex justify-between text-xs text-foreground mb-3",
                                  children: [
                                    (0, n.jsx)("span", { children: h }),
                                    (0, n.jsx)("span", { children: g }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center justify-center gap-4",
                                  children: [
                                    (0, n.jsx)("button", {
                                      onClick: () => {
                                        b((e) =>
                                          0 === e ? w.length - 1 : e - 1,
                                        );
                                      },
                                      className:
                                        "p-2 text-foreground hover:text-foreground transition-colors cursor-pointer",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "var(--foreground)",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsx)("button", {
                                      onClick: P,
                                      className:
                                        "cursor-pointer w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg",
                                      children: o
                                        ? (0, n.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, n.jsx)("path", {
                                              d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
                                            }),
                                          })
                                        : (0, n.jsx)("svg", {
                                            className: "w-5 h-5 ml-0.5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, n.jsx)("path", {
                                              d: "M8 5v14l11-7z",
                                            }),
                                          }),
                                    }),
                                    (0, n.jsx)("button", {
                                      onClick: S,
                                      className:
                                        "p-2 text-foreground hover:text-foreground transition-colors cursor-pointer",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "var(--foreground)",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                        (0, n.jsx)(l.P.button, {
                          onMouseEnter: () => {
                            y(!0);
                          },
                          onMouseLeave: () => {
                            y(!1);
                          },
                          onClick: () => {
                            (m(!d), o || P());
                          },
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          className:
                            "cursor-pointer w-10 h-10 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ".concat(
                              o
                                ? "bg-primary text-primary-foreground"
                                : "bg-background/95 backdrop-blur-md border border-primary/20 text-primary",
                            ),
                          children: o
                            ? (0, n.jsx)("div", {
                                className: "relative",
                                children: (0, n.jsx)("div", {
                                  className: "flex items-end gap-0.5 h-5",
                                  children: [1, 2, 3, 4].map((e) =>
                                    (0, n.jsx)(
                                      l.P.div,
                                      {
                                        className:
                                          "w-1 bg-current rounded-full",
                                        animate: {
                                          height: ["8px", "20px", "8px"],
                                        },
                                        transition: {
                                          duration: 0.5,
                                          repeat: 1 / 0,
                                          delay: 0.1 * e,
                                        },
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              })
                            : (0, n.jsx)("svg", {
                                className: "w-6 h-6",
                                fill: "var(--foreground)",
                                viewBox: "0 0 24 24",
                                children: (0, n.jsx)("path", {
                                  d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
                                }),
                              }),
                        }),
                        !d &&
                          (0, n.jsx)(l.P.button, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            onClick: (e) => {
                              (e.stopPropagation(), P());
                            },
                            className:
                              "absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary/80 backdrop-blur-sm hidden items-center justify-center text-foreground hover:bg-secondary transition-colors shadow-md",
                            children: o
                              ? (0, n.jsx)("svg", {
                                  className: "w-4 h-4",
                                  fill: "var(--foreground)",
                                  viewBox: "0 0 24 24",
                                  children: (0, n.jsx)("path", {
                                    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
                                  }),
                                })
                              : (0, n.jsx)("svg", {
                                  className: "w-4 h-4 ml-0.5",
                                  fill: "var(--foreground)",
                                  viewBox: "0 0 24 24",
                                  children: (0, n.jsx)("path", {
                                    d: "M8 5v14l11-7z",
                                  }),
                                }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var tg = a(96546),
        tv = a.n(tg);
      let tf = [
        {
          bankName: "Vietcombank",
          accountNumber: "1234567890123",
          accountHolder: "NGUYEN ANH TUAN NGOC",
          qr: "/qr-groom.png",
        },
        {
          bankName: "Techcombank",
          accountNumber: "9876543210987",
          accountHolder: "NGUYEN THI THUY TRINH",
          qr: "/qr-bride.png",
        },
      ];
      function tb(e) {
        let { accounts: t, brideImage: a, groomImage: s, side: r } = e,
          o = (0, i.useRef)(null),
          c = (0, z.W)(o, { once: !0, margin: "-100px" }),
          d = (t || tf)
            .map((e, t) => ({ ...e, originalIndex: t }))
            .filter((e) => {
              var t, a, n, i;
              return (
                (null == (t = e.bankName) ? void 0 : t.trim()) ||
                (null == (a = e.accountNumber) ? void 0 : a.trim()) ||
                (null == (n = e.accountHolder) ? void 0 : n.trim()) ||
                (null == (i = e.qr) ? void 0 : i.trim())
              );
            });
        if (0 === d.length) return null;
        let u = "groom" === r ? [...d].reverse() : d,
          [isOpen, setIsOpen] = (0, i.useState)(!1),
          [copiedIdx, setCopiedIdx] = (0, i.useState)(null),
          [hasScrolled, setHasScrolled] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          let e = o.current
            ? o.current.closest(".overflow-y-auto")
            : null,
            t = e || window,
            a = () => {
              (e ? e.scrollTop : window.scrollY) > 8 && setHasScrolled(!0);
            };
          return (
            a(),
            t.addEventListener("scroll", a, { passive: !0 }),
            () => t.removeEventListener("scroll", a)
          );
        }, []);
        (0, i.useEffect)(() => {
          let e = 0,
            t = () => {
              let a = o.current
                  ? o.current.querySelector(".wedding-scroll-cue")
                  : null,
                n = o.current ? o.current.querySelector("h2") : null;
              if (!a || !n || a.classList.contains("is-hidden")) return;
              a.classList.remove("is-viewport-centered"),
                a.style.removeProperty("--wedding-cue-top"),
                (e = window.requestAnimationFrame(() => {
                  let e = n.getBoundingClientRect().bottom,
                    t = a.offsetHeight,
                    i = o.current ? o.current.nextElementSibling : null,
                    s =
                      i && parseFloat(window.getComputedStyle(i).opacity) > 0.05
                        ? Math.min(window.innerHeight, i.getBoundingClientRect().top)
                        : window.innerHeight,
                    l = s - e;
                  if (l < t + 80) return;
                  let r = e + (l - t) / 2;
                  a.style.setProperty("--wedding-cue-top", "".concat(r, "px")),
                    a.classList.add("is-viewport-centered");
                }));
            },
            a = window.requestAnimationFrame(() => {
              e = window.requestAnimationFrame(t);
            }),
            n = window.setTimeout(t, 900);
          return (
            window.addEventListener("resize", t, { passive: !0 }),
            () => {
              window.cancelAnimationFrame(a),
                window.cancelAnimationFrame(e),
                window.clearTimeout(n),
                window.removeEventListener("resize", t);
            }
          );
        }, []);
        return (0, n.jsxs)("section", {
          className:
            "py-1 px-4 relative overflow-hidden select-none flex flex-col justify-center",
          style: {
            background: "transparent",
            height: "auto",
            minHeight: 0,
          },
          ref: o,
          id: "wedding-gift",
          children: [
            (0, n.jsxs)("div", {
              className:
                "mx-auto max-w-xl flex flex-col items-center text-center",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "relative cursor-pointer group flex flex-col items-center mb-1",
                  onClick: () => setIsOpen((e) => !e),
                  children: [
                    (0, n.jsx)(l.P.div, {
                      className: "absolute rounded-full pointer-events-none",
                      style: {
                        display: "none",
                        width: "87px",
                        height: "87px",
                        top: "7px",
                        background:
                          "radial-gradient(circle, rgba(255,224,126,.5) 0%, rgba(212,175,55,.16) 42%, transparent 70%)",
                        filter: "blur(5px)",
                      },
                    }),
                    (0, n.jsx)(l.P.img, {
                      src: "images/wedding-heart-gift.png",
                      alt: "Hộp quà cưới hình trái tim",
                      draggable: !1,
                      className:
                        "relative z-10 h-auto select-none drop-shadow-[0_9px_9px_rgba(92,36,52,0.24)]",
                      style: { width: "64px", maxWidth: "64px" },
                      animate: {
                        y: [0, -5, 0],
                        rotate: [0, -1.8, 1.8, 0],
                        scale: [1, 1.015, 1],
                      },
                      whileHover: { scale: 1.04 },
                      whileTap: { scale: 0.96 },
                      transition: {
                        duration: 2.4,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                    }),
                    !isOpen &&
                      (0, n.jsxs)("span", {
                        className: "wedding-gift-hand-guide",
                        "aria-hidden": !0,
                        children: [
                          (0, n.jsx)("span", {
                            className: "wedding-gift-tap-ring",
                          }),
                          (0, n.jsx)("span", {
                            className: "wedding-gift-hand",
                            children: (0, n.jsxs)("svg", {
                              viewBox: "0 0 32 38",
                              focusable: "false",
                              children: [
                                (0, n.jsx)("path", {
                                  className: "wedding-gift-hand-rays",
                                  d: "M15 1v3M7.8 4.2l2.1 2.1M22.2 4.2l-2.1 2.1",
                                }),
                                (0, n.jsx)("path", {
                                  className: "wedding-gift-hand-palm",
                                  d: "M12.2 19.4V8.1a2.8 2.8 0 0 1 5.6 0v7.1-2.6a2.5 2.5 0 0 1 5 0v3.1-1.7a2.35 2.35 0 0 1 4.7 0v7.2c0 7.5-3.9 12.3-10.3 12.3h-1.7c-3.1 0-5.7-1.4-7.5-3.8l-4.6-6.3a2.7 2.7 0 0 1 4.1-3.5l4.7 3.9v-4.4Z",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, n.jsx)("h2", {
                  className: "".concat(
                    tv().className,
                    " text-xl md:text-2xl font-semibold leading-tight mt-0 cursor-pointer",
                  ),
                  style: { color: "#5C2434" },
                  onClick: () => setIsOpen((e) => !e),
                  children: "Hộp Mừng Cưới",
                }),
                (0, n.jsxs)("button", {
                  type: "button",
                  className: "wedding-scroll-cue".concat(
                    hasScrolled ? " is-hidden" : "",
                  ),
                  "aria-label": "Vuốt lên để xem tiếp",
                  onClick: () => {
                    setHasScrolled(!0);
                    let e = o.current
                        ? o.current.closest(".overflow-y-auto")
                        : null,
                      t = Math.min(420, window.innerHeight * 0.55);
                    e && e.scrollBy
                      ? e.scrollBy({ top: t, behavior: "smooth" })
                      : window.scrollBy({ top: t, behavior: "smooth" });
                  },
                  children: [
                    (0, n.jsx)("span", { children: "Vuốt lên xem tiếp" }),
                    (0, n.jsx)("span", {
                      className: "wedding-scroll-cue-arrows",
                      "aria-hidden": !0,
                    }),
                  ],
                }),
              ],
            }),
            isOpen &&
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0, y: 36, scale: 0.92 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: {
                  duration: 0.65,
                  type: "spring",
                  stiffness: 120,
                  damping: 16,
                },
                className: "mx-auto max-w-3xl mt-8",
                children: (0, n.jsxs)("div", {
                  className: "grid gap-6 md:grid-cols-2 text-left",
                  children: [
                    ...u.map((e, t) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          className:
                            "rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all",
                          style: {
                            backgroundColor: "#FFFFFF",
                            border: "1.5px solid #E8D9C9",
                            boxShadow: "0 10px 30px rgba(92, 36, 52, 0.08)",
                          },
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-center justify-between border-b pb-3 mb-4",
                              style: { borderColor: "#F0E6DC" },
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "h-11 w-11 rounded-full flex items-center justify-center text-xl shadow-inner",
                                      style: { backgroundColor: "#F5EBE6" },
                                      children:
                                        0 === e.originalIndex ? "🤵" : "👰",
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("h3", {
                                          className:
                                            "font-bold text-base md:text-lg leading-tight",
                                          style: { color: "#5C2434" },
                                          children: e.bankName || "Ngân hàng",
                                        }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-xs font-semibold mt-0.5",
                                          style: { color: "#A33A52" },
                                          children:
                                            0 === e.originalIndex
                                              ? "CHÚ RỂ (NHÀ TRAI)"
                                              : "CÔ DÂU (NHÀ GÁI)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("span", {
                                  className:
                                    "text-xs px-2.5 py-1 rounded-full font-bold",
                                  style: {
                                    backgroundColor: "#FAF2ED",
                                    color: "#8B1E3F",
                                    border: "1px solid #E8D5C4",
                                  },
                                  children:
                                    0 === e.originalIndex
                                      ? "VŨ KHÁNH"
                                      : "NGUYỄN HUẾ",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "flex flex-col items-center mb-4 p-3.5 rounded-xl text-center",
                              style: {
                                backgroundColor: "#FAF7F2",
                                border: "1px solid #EFE5DB",
                              },
                              children: [
                                (0, n.jsx)("p", {
                                  className: "text-xs font-semibold mb-2.5",
                                  style: { color: "#5C2434" },
                                  children: "Quét mã QR để mừng cưới",
                                }),
                                (0, n.jsx)("div", {
                                  className: "p-2 rounded-xl shadow-sm",
                                  style: {
                                    backgroundColor: "#FFFFFF",
                                    border: "1.5px solid #E0D0C0",
                                  },
                                  children: (0, n.jsx)("img", {
                                    src: e.qr,
                                    alt: "QR Code",
                                    className:
                                      "h-44 w-44 object-contain mx-auto rounded-lg",
                                    loading: "lazy",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "space-y-3",
                              children: [
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className:
                                        "text-[11px] uppercase tracking-wider font-semibold block mb-1",
                                      style: { color: "#8C6553" },
                                      children: "Số tài khoản",
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between rounded-xl px-3.5 py-2.5",
                                      style: {
                                        backgroundColor: "#F7F3EE",
                                        border: "1px solid #E5D9CE",
                                      },
                                      children: [
                                        (0, n.jsx)("span", {
                                          className:
                                            "font-mono text-base md:text-lg font-bold tracking-wider",
                                          style: { color: "#5C2434" },
                                          children: e.accountNumber,
                                        }),
                                        (0, n.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            navigator.clipboard.writeText(
                                              e.accountNumber,
                                            );
                                            setCopiedIdx(t);
                                            setTimeout(
                                              () => setCopiedIdx(null),
                                              2000,
                                            );
                                          },
                                          className:
                                            "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-bold transition shadow-sm cursor-pointer",
                                          style: {
                                            backgroundColor:
                                              copiedIdx === t
                                                ? "#2E7D32"
                                                : "#8B1E3F",
                                            color: "#FFFFFF",
                                          },
                                          children:
                                            copiedIdx === t
                                              ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                    (0, n.jsx)(ex.A, {
                                                      className: "h-3.5 w-3.5",
                                                    }),
                                                    "Đã chép",
                                                  ],
                                                })
                                              : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                    (0, n.jsx)(eh.A, {
                                                      className: "h-3.5 w-3.5",
                                                    }),
                                                    "Sao chép",
                                                  ],
                                                }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("span", {
                                      className:
                                        "text-[11px] uppercase tracking-wider font-semibold block",
                                      style: { color: "#8C6553" },
                                      children: "Chủ tài khoản",
                                    }),
                                    (0, n.jsx)("p", {
                                      className:
                                        "font-bold text-sm md:text-base tracking-wide uppercase mt-0.5",
                                      style: { color: "#5C2434" },
                                      children: e.accountHolder,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        e.accountNumber || t,
                      ),
                    ),
                    (0, n.jsx)("div", {
                      className: "md:col-span-2 text-center mt-4",
                      children: (0, n.jsxs)("button", {
                        type: "button",
                        onClick: () => setIsOpen(!1),
                        className:
                          "inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition shadow-sm cursor-pointer",
                        style: {
                          backgroundColor: "#FFFFFF",
                          color: "#7D6257",
                          border: "1px solid #DCD0C4",
                        },
                        children: [
                          (0, n.jsx)("span", { children: "▲" }),
                          "Thu gọn hộp mừng cưới",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var tj = a(42398),
        ty = a.n(tj),
        tN = a(63888),
        tw = a.n(tN);
      function tk(e) {
        let { children: t } = e,
          a = (0, i.useRef)(null),
          [s, l] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = a.current;
            if (!e) return;
            let t = () => {
              let t = parseFloat(getComputedStyle(e).lineHeight);
              l(1 >= Math.round(e.scrollHeight / t));
            };
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
          }, [t]),
          (0, n.jsx)("p", {
            ref: a,
            className: "\n        "
              .concat(
                tw().className,
                "\n        whitespace-pre-line\n        text-base\n        font-medium\n        text-gray-700\n        leading-relaxed\n        ",
              )
              .concat(s ? "text-center" : "text-justify", "\n      "),
            children: t,
          })
        );
      }
      function tC(e) {
        let { content: t, signature: a } = e;
        return (null == t ? void 0 : t.trim())
          ? (0, n.jsxs)(l.P.div, {
              initial: { opacity: 0, y: 60 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.2 },
              transition: { duration: 1, ease: "easeOut" },
              className: "px-6 text-center mt-6 mb-10",
              children: [
                (0, n.jsx)("p", {
                  className: "".concat(
                    ty().className,
                    " text-3xl text-secondary mb-3",
                  ),
                  children: "C\xe2u chuyện t\xecnh y\xeau",
                }),
                (0, n.jsx)(tk, { children: t }),
                (0, n.jsxs)("div", {
                  className: "mt-6 flex items-center justify-center",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "flex-1 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70",
                    }),
                    (0, n.jsx)("p", {
                      className: "".concat(
                        ty().className,
                        " text-xl text-secondary mx-4 whitespace-nowrap",
                      ),
                      children: a,
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "flex-1 h-[1px] bg-gradient-to-l from-transparent via-secondary to-transparent opacity-70",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var tT = a(3404),
        tP = a.n(tT),
        tS = a(45938),
        tI = a.n(tS);
      function tz(e) {
        let { content: t, signature: a } = e;
        return (0, n.jsxs)(l.P.div, {
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, amount: 0.2 },
          transition: { duration: 1, ease: "easeOut" },
          className: "px-6 text-center mt-6 mb-4",
          children: [
            (0, n.jsx)("p", {
              className: "".concat(
                tP().className,
                " text-3xl text-secondary mb-3",
              ),
              children: "Lời ng\xf5",
            }),
            (0, n.jsx)("p", {
              className: "".concat(
                tI().className,
                " text-base text-gray-700 leading-relaxed font-medium",
              ),
              children:
                "Ch\xfang t\xf4i v\xf4 c\xf9ng hạnh ph\xfac khi được ch\xe0o đ\xf3n bạn đến chung vui trong ng\xe0y trọng đại của m\xecnh. Sự hiện diện của bạn sẽ l\xe0 niềm vinh hạnh v\xe0 hạnh ph\xfac lớn lao đối với ch\xfang t\xf4i.",
            }),
            (0, n.jsxs)("div", {
              className: "mt-6 flex items-center justify-center",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "flex-1 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70",
                }),
                (0, n.jsx)("p", {
                  className: "".concat(
                    tP().className,
                    " text-xl text-secondary mx-4 whitespace-nowrap",
                  ),
                  children: a,
                }),
                (0, n.jsx)("div", {
                  className:
                    "flex-1 h-[1px] bg-gradient-to-l from-transparent via-secondary to-transparent opacity-70",
                }),
              ],
            }),
          ],
        });
      }
      var tD = a(3282),
        tV = a.n(tD);
      function t_(e) {
        let {
            youtubeUrl: t = "https://www.youtube.com/embed/dQw4w9WgXcQ",
            title: a = "Lời Nhắn Gửi",
            description:
              s = "Ch\xfang t\xf4i muốn gửi đến c\xe1c bạn những lời y\xeau thương v\xe0 cảm ơn ch\xe2n th\xe0nh nhất. Xin h\xe3y c\xf9ng xem video n\xe0y để hiểu th\xeam về h\xe0nh tr\xecnh t\xecnh y\xeau của ch\xfang t\xf4i.",
          } = e,
          [r, o] = (0, i.useState)(!1);
        return t && "" !== t.trim()
          ? (0, n.jsxs)("section", {
              className:
                "py-10 md:py-28 bg-foreground text-background relative overflow-hidden",
              children: [
                (0, n.jsxs)("div", {
                  className: "absolute inset-0 opacity-5",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-10 left-10 w-64 h-64 border border-current rounded-full",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute bottom-10 right-10 w-96 h-96 border border-current rounded-full",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "container mx-auto px-4 relative z-10",
                  children: [
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6 },
                      className: "text-center mb-12",
                      children: [
                        (0, n.jsx)(l.P.div, {
                          initial: { scale: 0 },
                          whileInView: { scale: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.2 },
                          className:
                            "inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 mb-6",
                          children: (0, n.jsx)("svg", {
                            className: "w-8 h-8",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                              d: "M8 5v14l11-7z",
                            }),
                          }),
                        }),
                        (0, n.jsx)("h2", {
                          className: "".concat(
                            tV().className,
                            "text-3xl md:text-5xl",
                          ),
                          children: a,
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-background/70 max-w-2xl mx-auto leading-relaxed",
                          children: s,
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, scale: 0.95 },
                      whileInView: { opacity: 1, scale: 1 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6, delay: 0.3 },
                      className: "max-w-4xl mx-auto",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/20",
                          children: [
                            !r &&
                              (0, n.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center bg-background/5",
                                children: (0, n.jsxs)("div", {
                                  className: "flex flex-col items-center gap-4",
                                  children: [
                                    (0, n.jsx)(l.P.div, {
                                      animate: { rotate: 360 },
                                      transition: {
                                        duration: 1,
                                        repeat: 1 / 0,
                                        ease: "linear",
                                      },
                                      className:
                                        "w-10 h-10 border-2 border-background/30 border-t-background rounded-full",
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "text-sm text-background/50",
                                      children: "Đang tải video...",
                                    }),
                                  ],
                                }),
                              }),
                            (0, n.jsx)("iframe", {
                              src: t,
                              title: "Wedding Video",
                              allow:
                                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowFullScreen: !0,
                              onLoad: () => o(!0),
                              className:
                                "absolute inset-0 w-full h-full transition-opacity duration-500 ".concat(
                                  r ? "opacity-100" : "opacity-0",
                                ),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute inset-0 pointer-events-none border border-background/10 rounded-2xl",
                            }),
                          ],
                        }),
                        (0, n.jsx)(l.P.p, {
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.5 },
                          className:
                            "text-center mt-6 text-secondary text-sm italic",
                          children:
                            "“T\xecnh y\xeau kh\xf4ng phải l\xe0 nh\xecn nhau, m\xe0 l\xe0 c\xf9ng nhau nh\xecn về một hướng”",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex justify-center gap-2 mt-10",
                      children: [void 0, void 0, void 0].map((e, t) =>
                        (0, n.jsx)(
                          l.P.svg,
                          {
                            initial: { opacity: 0, scale: 0 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: !0 },
                            transition: { duration: 0.3, delay: 0.6 + 0.1 * t },
                            className: "w-4 h-4 text-background/30",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                              d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var tA = a(46204),
        tE = a.n(tA);
      let tL = [
        {
          time: "09:00",
          title: "Lễ Vu Quy",
          location: "Nh\xe0 G\xe1i - Quận Ba Đ\xecnh, H\xe0 Nội",
          description: "Nghi lễ truyền thống tại gia đ\xecnh nh\xe0 g\xe1i",
          icon: "\uD83D\uDC92",
        },
        {
          time: "11:00",
          title: "Lễ Th\xe0nh H\xf4n",
          location: "Nh\xe0 Trai - Quận Cầu Giấy, H\xe0 Nội",
          description: "Nghi lễ rước d\xe2u v\xe0 lễ cưới ch\xednh thức",
          icon: "\uD83D\uDC92",
        },
        {
          time: "12:00",
          title: "Tiệc Cưới",
          location: "Trung T\xe2m Tiệc Cưới White Palace",
          description: "Tiệc mừng c\xf9ng gia đ\xecnh v\xe0 bạn b\xe8",
          icon: "\uD83C\uDF7D️",
        },
        {
          time: "18:00",
          title: "Tiệc Tối & \xc2m Nhạc",
          location: "Trung T\xe2m Tiệc Cưới White Palace",
          description: "Gala dinner với chương tr\xecnh văn nghệ đặc sắc",
          icon: "\uD83C\uDFB6",
        },
      ];
      function tM(e) {
        let { events: t } = e,
          a = (0, i.useRef)(null),
          s = (0, z.W)(a, { once: !0, margin: "-100px" }),
          r = (null != t ? t : tL).filter((e) => {
            var t, a, n, i;
            return (
              (null == (t = e.title) ? void 0 : t.trim()) ||
              (null == (a = e.time) ? void 0 : a.trim()) ||
              (null == (n = e.location) ? void 0 : n.trim()) ||
              (null == (i = e.description) ? void 0 : i.trim())
            );
          });
        return 0 === r.length
          ? null
          : (0, n.jsx)("section", {
              className: "py-10 md:py-20",
              ref: a,
              children: (0, n.jsxs)("div", {
                className: "mx-auto max-w-4xl px-6",
                children: [
                  (0, n.jsx)(l.P.div, {
                    initial: { opacity: 0, y: 40 },
                    animate: s ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8 },
                    className: "mb-10 text-center",
                    children: [
                      (0, n.jsx)("p", {
                        className: "".concat(
                          tE().className,
                          " text-3xl text-secondary mb-2",
                        ),
                        children: "Lịch Trình Tiệc Cưới",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "mx-auto h-0.5 w-16 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "wedding-timeline-list relative",
                    children: [
                      (0, n.jsx)("div", {
                        className: "wedding-timeline-line",
                      }),
                      r.map((e, t) =>
                        (0, n.jsxs)(
                          l.P.div,
                          {
                            initial: { opacity: 0, y: 25 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0, amount: 0.25 },
                            transition: { duration: 0.6, delay: 0.1 * t },
                            className: "wedding-timeline-item",
                            children: [
                              (0, n.jsx)("div", {
                                className: "wedding-timeline-node",
                                children: (0, n.jsx)("span", {
                                  className: "wedding-timeline-icon",
                                  children: e.icon || "💍",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "wedding-timeline-card",
                                children: [
                                  e.time &&
                                    (0, n.jsx)("span", {
                                      className: "wedding-timeline-time",
                                      children: e.time,
                                    }),
                                  (0, n.jsx)("h3", {
                                    className: "wedding-timeline-title",
                                    children: e.title,
                                  }),
                                  (e.location || e.description) &&
                                    (0, n.jsx)("p", {
                                      className: "wedding-timeline-desc",
                                      children: e.location || e.description,
                                    }),
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            });
      }
      function tH(e) {
        var t,
          a,
          s,
          r,
          o,
          c,
          d,
          m,
          u,
          x,
          h,
          p,
          g,
          v,
          f,
          b,
          j,
          y,
          N,
          w,
          k,
          C,
          T,
          P,
          S,
          I,
          z,
          D,
          V,
          _,
          A,
          E,
          L,
          M,
          H,
          B,
          q,
          F,
          R,
          W,
          G,
          O,
          Q,
          U,
          Y,
          K,
          X,
          Z,
          $,
          J,
          ee,
          et,
          ea,
          en;
        let { data: ei, guestName: es, showDoorAnimation: el = !1 } = e,
          [er, eo] = (0, i.useState)(!0),
          [ec, ed] = (0, i.useState)(0),
          [em, eu] = (0, i.useState)(!0);
        (0, i.useEffect)(() => {
          eo(!0);
          eu(!0);
        }, []);
        let ex =
            (null == ei || null == (a = ei.page) || null == (t = a.order)
              ? void 0
              : t.length) > 0
              ? ei.page.order
              : [
                  "hero",
                  "calendar",
                  "couple",
                  "story",
                  "location",
                  "timeline",
                  "gallery",
                  "video",
                  "wishes",
                  "rsvp",
                  "gift",
                  "countdown",
                  "thankyou",
                ];
        let giftPosition = ex.indexOf("hero");
        ex = ex.filter((e) => "gift" !== e);
        ex.splice(giftPosition >= 0 ? giftPosition + 1 : 1, 0, "gift");
        let eh = {
            hero: (0, n.jsx)(eM, {
              guestName: es,
              data: ei.hero,
              groomName:
                null == (r = ei.couple) || null == (s = r.groom)
                  ? void 0
                  : s.name,
              brideName:
                null == (c = ei.couple) || null == (o = c.bride)
                  ? void 0
                  : o.name,
              side: ei.side,
              groomShortName:
                null == (m = ei.couple) || null == (d = m.groom)
                  ? void 0
                  : d.shortName,
              brideShortName:
                null == (x = ei.couple) || null == (u = x.bride)
                  ? void 0
                  : u.shortName,
            }),
            calendar: (0, n.jsx)(eq, {
              weddingDate: null == (h = ei.hero) ? void 0 : h.date,
              image: null == (p = ei.story) ? void 0 : p.image,
              brideWeddingDate: null == (g = ei.hero) ? void 0 : g.date,
              groomWeddingDate: null == (v = ei.hero) ? void 0 : v.date2,
            }),
            couple: (0, n.jsx)(e7, { data: ei.couple, side: ei.side }),
            story: (0, n.jsx)(tC, {
              content:
                (null == (b = ei.story.content) ||
                null ==
                  (f = b.find((e) => {
                    var t;
                    return null == (t = e.desc) ? void 0 : t.trim();
                  }))
                  ? void 0
                  : f.desc) || "",
              signature: ""
                .concat(ei.couple.bride.name, " & ")
                .concat(ei.couple.groom.name),
            }),
            location: (0, n.jsx)(eY, {
              venues: ei.venues,
              dressColors: ei.dressColors,
              weddingId: ei.id,
              dressCodeDescription: ei.dressCodeDescription,
            }),
            timeline: (0, n.jsx)(tM, {
              events: ei.events,
              weddingDate: null == (j = ei.hero) ? void 0 : j.date,
            }),
            gallery: (0, n.jsx)(e4, {
              images: ei.gallery,
              lang: ei.lang,
              title: null == (y = ei.gallery) ? void 0 : y.title,
            }),
            video: (0, n.jsx)(t_, {
              youtubeUrl: null == (N = ei.video) ? void 0 : N.url,
              title: null == (w = ei.video) ? void 0 : w.title,
              description: null == (k = ei.video) ? void 0 : k.desc,
            }),
            wishes:
              (null == (C = ei.features) ? void 0 : C.showWishes) !== !1 &&
              (0, n.jsx)(td, {
                refreshKey: ec,
                weddingId: ei.id,
                coverImage: null == (T = ei.wishes) ? void 0 : T.coverImage,
              }),
            rsvp:
              (null == (P = ei.features) ? void 0 : P.showRSVP) !== !1 &&
              (0, n.jsx)(tx, {
                weddingId: ei.id,
                theme: ei.theme,
                onSuccess: () => ed((e) => e + 1),
                people:
                  "groom" === ei.side
                    ? [
                        {
                          value: "groom",
                          label: "Ch\xfa rể",
                          img:
                            null == (I = ei.couple) || null == (S = I.groom)
                              ? void 0
                              : S.image,
                        },
                        {
                          value: "bride",
                          label: "C\xf4 d\xe2u",
                          img:
                            null == (D = ei.couple) || null == (z = D.bride)
                              ? void 0
                              : z.image,
                        },
                        {
                          value: "both",
                          label: "Cả hai",
                          img: null == (V = ei.story) ? void 0 : V.image,
                        },
                      ]
                    : [
                        {
                          value: "bride",
                          label: "C\xf4 d\xe2u",
                          img:
                            null == (A = ei.couple) || null == (_ = A.bride)
                              ? void 0
                              : _.image,
                        },
                        {
                          value: "groom",
                          label: "Ch\xfa rể",
                          img:
                            null == (L = ei.couple) || null == (E = L.groom)
                              ? void 0
                              : E.image,
                        },
                        {
                          value: "both",
                          label: "Cả hai",
                          img: null == (M = ei.story) ? void 0 : M.image,
                        },
                      ],
                brideName:
                  null == (B = ei.couple) || null == (H = B.bride)
                    ? void 0
                    : H.name,
                groomName:
                  null == (F = ei.couple) || null == (q = F.groom)
                    ? void 0
                    : q.name,
                thankYouImage:
                  null !=
                  (en = null == (R = ei.thankyou) ? void 0 : R.coverImage)
                    ? en
                    : "",
                features: ei.features,
              }),
            gift: (0, n.jsx)(tb, {
              accounts: ei.bankAccounts,
              brideImage:
                null == (G = ei.couple) || null == (W = G.bride)
                  ? void 0
                  : W.image,
              groomImage:
                null == (Q = ei.couple) || null == (O = Q.groom)
                  ? void 0
                  : O.image,
              side: ei.side,
            }),
            countdown: (0, n.jsx)(tt, {
              weddingDate:
                (null == (U = ei.hero) ? void 0 : U.date2) &&
                (null == (Y = ei.countdown) ? void 0 : Y.useFirstDate) === !1
                  ? ei.hero.date2
                  : null == (K = ei.hero)
                    ? void 0
                    : K.date,
            }),
            thankyou: (0, n.jsx)(tl, {
              brideName:
                null == (Z = ei.couple) || null == (X = Z.bride)
                  ? void 0
                  : X.name,
              groomName:
                null == (J = ei.couple) || null == ($ = J.groom)
                  ? void 0
                  : $.name,
              theme: ei.theme,
              image: null == (ee = ei.thankyou) ? void 0 : ee.coverImage,
              side: ei.side,
              title: null == (et = ei.thankyou) ? void 0 : et.title,
              description: null == (ea = ei.thankyou) ? void 0 : ea.description,
            }),
          };
        return (0, n.jsxs)("div", {
          className:
            "mx-auto relative md:w-[50%] min-h-screen bg-foreground shadow-2xl overflow-visible",
          children: [
            (0, n.jsxs)("div", {
              className:
                "w-full bg-foreground overflow-visible",
              children: [
                ex.map((e) => {
                  let t = eh[e];
                  return (0, n.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        t,
                        "location" === e &&
                          "3d56a21c-a0ff-4f79-bc66-c5c6163d25ce" === ei.id &&
                          (0, n.jsx)(tz, {
                            signature: ""
                              .concat(ei.couple.bride.name, " & ")
                              .concat(ei.couple.groom.name),
                          }),
                      ],
                    },
                    e,
                  );
                }),
                (0, n.jsx)(tp, { playlist: ei.playlist, autoPlay: em }),
              ],
            }),
            el &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)(l.P.div, {
                    initial: { x: 0 },
                    animate: { x: er ? "-100%" : 0 },
                    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
                    className:
                      "absolute top-0 left-0 w-1/2 h-full bg-background z-10 border-r border-white/20 overflow-hidden pointer-events-none",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-[200%] h-[80px] bg-[url('/path-to-lanterns.png')] bg-contain bg-repeat-x",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-[45%] right-0 translate-x-1/2 -translate-y-1/2 w-[200%] max-w-[300px] aspect-square flex items-center justify-center",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-full h-full text-foreground text-[100px] font-bold flex items-center justify-center",
                          children: "囍",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(l.P.div, {
                    initial: { x: 0 },
                    animate: { x: er ? "100%" : 0 },
                    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
                    className:
                      "absolute top-0 right-0 w-1/2 h-full bg-background z-10 border-l border-white/20 overflow-hidden pointer-events-none",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-[200%] h-[80px] bg-[url('/path-to-lanterns.png')] bg-contain bg-repeat-x scale-x-[-1]",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-[45%] left-0 -translate-x-1/2 -translate-y-1/2 w-[200%] max-w-[300px] aspect-square flex items-center justify-center",
                        children: (0, n.jsx)("div", {
                          className:
                            "w-full h-full text-foreground text-[100px] font-bold flex items-center justify-center",
                          children: "囍",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var tB = a(67909);
      let tq = (0, tB.default)(
          () =>
            a
              .e(213)
              .then(a.bind(a, 20213))
              .then((e) => e.Gallery),
          {
            loadableGenerated: { webpack: () => [20213] },
            ssr: !1,
            loading: () =>
              (0, n.jsx)("div", {
                className: "py-20 text-center",
                children: "Đang tải album ảnh...",
              }),
          },
        ),
        tF = (e) => {
          if (!e) return "";
          let t = new Date(e),
            a = String(t.getDate()).padStart(2, "0"),
            n = String(t.getMonth() + 1).padStart(2, "0"),
            i = t.getFullYear();
          return "".concat(a, ".").concat(n, ".").concat(i);
        };
      function tR(e) {
        var t,
          a,
          s,
          r,
          o,
          c,
          m,
          u,
          x,
          h,
          p,
          g,
          v,
          f,
          b,
          j,
          y,
          N,
          w,
          k,
          T,
          P,
          S,
          z,
          D,
          V,
          A,
          E,
          M,
          H,
          B,
          F,
          R,
          W,
          G,
          O,
          Q,
          U,
          Y,
          K,
          X,
          Z,
          $,
          J,
          ee,
          ea,
          en,
          ei,
          es,
          el,
          ed,
          em,
          ex,
          eh,
          ep,
          ev,
          ef,
          eb,
          eN,
          eT,
          eP,
          eI,
          ez,
          eD,
          eV,
          e_,
          eA,
          eE,
          eL,
          eM,
          eH,
          eB,
          eq,
          eF,
          eR,
          eW,
          eG,
          eO,
          eQ,
          eU,
          eY,
          eK,
          eX,
          eZ,
          e$,
          eJ,
          e0;
        let { data: e1, guestName: e2, showDoorAnimation: e4 = !0 } = e,
          e5 =
            null !=
            (eY = null == e1 || null == (t = e1.features) ? void 0 : t.lang)
              ? eY
              : "vi",
          [e3, e6] = (0, i.useState)(!1),
          [e8, e7] = (0, i.useState)(0),
          [e9, te] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          let e = setTimeout(() => {
              (e6(!0), te(!0));
            }, 1200),
            t = setTimeout(() => {
              ti(!1);
            }, 2700);
          return () => {
            (clearTimeout(e), clearTimeout(t));
          };
        }, []);
        let tt =
            null !=
              (eK =
                null == (a = e1.bankAccounts)
                  ? void 0
                  : a.some((e) => {
                      var t, a, n, i;
                      return (
                        (null == (t = e.bankName) ? void 0 : t.trim()) ||
                        (null == (a = e.accountNumber) ? void 0 : a.trim()) ||
                        (null == (n = e.accountHolder) ? void 0 : n.trim()) ||
                        (null == (i = e.qr) ? void 0 : i.trim())
                      );
                    })) && eK,
          ta =
            (null != (eX = null == (s = e1.bridesmaids) ? void 0 : s.length)
              ? eX
              : 0) > 0 ||
            (null != (eZ = null == (r = e1.groomsmen) ? void 0 : r.length)
              ? eZ
              : 0) > 0,
          [tn, ti] = (0, i.useState)(e4);
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("main", {
                className: "min-h-screen",
                children: [
                  (0, n.jsx)(C, {
                    brideName:
                      null == (c = e1.couple) || null == (o = c.bride)
                        ? void 0
                        : o.name,
                    groomName:
                      null == (u = e1.couple) || null == (m = u.groom)
                        ? void 0
                        : m.name,
                    side: e1.side,
                    lang: e5,
                  }),
                  (0, n.jsx)(I, {
                    data: e1.hero,
                    groomName:
                      null == (h = e1.couple) || null == (x = h.groom)
                        ? void 0
                        : x.name,
                    brideName:
                      null == (g = e1.couple) || null == (p = g.bride)
                        ? void 0
                        : p.name,
                    side: e1.side,
                    brideWeddingDate: tF(
                      null == (v = e1.hero) ? void 0 : v.date,
                    ),
                    groomWeddingDate: tF(
                      null == (f = e1.hero) ? void 0 : f.date2,
                    ),
                    groomShortName:
                      null == (j = e1.couple) || null == (b = j.groom)
                        ? void 0
                        : b.shortName,
                    brideShortName:
                      null == (N = e1.couple) || null == (y = N.bride)
                        ? void 0
                        : y.shortName,
                    nameLayout: null == (w = e1.hero) ? void 0 : w.nameLayout,
                  }),
                  (0, n.jsx)(ek, {
                    weddingDate: null == (k = e1.hero) ? void 0 : k.date,
                    brideWeddingDate: null == (T = e1.hero) ? void 0 : T.date,
                    groomWeddingDate: null == (P = e1.hero) ? void 0 : P.date2,
                    lang: e5,
                  }),
                  (0, n.jsx)(_, {
                    data: e1.story,
                    brideName:
                      null == (z = e1.couple) || null == (S = z.bride)
                        ? void 0
                        : S.name,
                    groomName:
                      null == (V = e1.couple) || null == (D = V.groom)
                        ? void 0
                        : D.name,
                    side: e1.side,
                    weddingId: e1.id,
                    lang: e5,
                  }),
                  (0, n.jsx)(L, {
                    data: e1.couple,
                    side: e1.side,
                    weddingId: e1.id,
                    lang: e5,
                  }),
                  (0, n.jsx)(er, {
                    venues: e1.venues,
                    dressColors: e1.dressColors,
                    lang: e5,
                    dressCodeDescription: e1.dressCodeDescription,
                  }),
                  (0, n.jsx)(et, {
                    events: e1.events,
                    weddingDate: null == (A = e1.hero) ? void 0 : A.date,
                    lang: e5,
                  }),
                  (0, n.jsx)(tq, { images: e1.gallery, lang: e5 }),
                  (0, n.jsx)(eo, {
                    youtubeUrl: null == (E = e1.video) ? void 0 : E.url,
                    title: null == (M = e1.video) ? void 0 : M.title,
                    description: null == (H = e1.video) ? void 0 : H.desc,
                    lang: e5,
                  }),
                  (null == (B = e1.features) ? void 0 : B.showWishes) !== !1 &&
                    (0, n.jsx)(eu, {
                      refreshKey: e8,
                      weddingId: e1.id,
                      coverImage:
                        null == (F = e1.wishes) ? void 0 : F.coverImage,
                      lang: e5,
                    }),
                  (null == (R = e1.features) ? void 0 : R.showRSVP) !== !1 &&
                    (0, n.jsx)(ej, {
                      lang: e5,
                      weddingId: e1.id,
                      theme: e1.theme,
                      onSuccess: () => e7((e) => e + 1),
                      people:
                        "groom" === e1.side
                          ? [
                              {
                                value: "groom",
                                label: d.w.people.groom[e5],
                                img:
                                  null == (G = e1.couple) ||
                                  null == (W = G.groom)
                                    ? void 0
                                    : W.image,
                              },
                              {
                                value: "bride",
                                label: d.w.people.bride[e5],
                                img:
                                  null == (Q = e1.couple) ||
                                  null == (O = Q.bride)
                                    ? void 0
                                    : O.image,
                              },
                              {
                                value: "both",
                                label: d.w.people.both[e5],
                                img: null == (U = e1.story) ? void 0 : U.image,
                              },
                            ]
                          : [
                              {
                                value: "bride",
                                label: d.w.people.bride[e5],
                                img:
                                  null == (K = e1.couple) ||
                                  null == (Y = K.bride)
                                    ? void 0
                                    : Y.image,
                              },
                              {
                                value: "groom",
                                label: d.w.people.groom[e5],
                                img:
                                  null == (Z = e1.couple) ||
                                  null == (X = Z.groom)
                                    ? void 0
                                    : X.image,
                              },
                              {
                                value: "both",
                                label: d.w.people.both[e5],
                                img: null == ($ = e1.story) ? void 0 : $.image,
                              },
                            ],
                      brideName:
                        null == (ee = e1.couple) || null == (J = ee.bride)
                          ? void 0
                          : J.name,
                      groomName:
                        null == (en = e1.couple) || null == (ea = en.groom)
                          ? void 0
                          : ea.name,
                      thankYouImage:
                        null !=
                        (e$ =
                          null == (ei = e1.thankyou) ? void 0 : ei.coverImage)
                          ? e$
                          : "",
                      side: e1.side,
                      features: e1.features,
                    }),
                  (0, n.jsx)(eg, {
                    accounts: e1.bankAccounts,
                    brideImage:
                      null == (el = e1.couple) || null == (es = el.bride)
                        ? void 0
                        : es.image,
                    groomImage:
                      null == (em = e1.couple) || null == (ed = em.groom)
                        ? void 0
                        : ed.image,
                    side: e1.side,
                  }),
                  (0, n.jsx)(q, {
                    bridesmaids: null != (eJ = e1.bridesmaids) ? eJ : [],
                    groomsmen: null != (e0 = e1.groomsmen) ? e0 : [],
                  }),
                  (0, n.jsx)(ec, {
                    weddingDate: null == (ex = e1.hero) ? void 0 : ex.date,
                    city: null == (eh = e1.hero) ? void 0 : eh.city,
                    countdownImage:
                      null == (ep = e1.countdown) ? void 0 : ep.coverImage,
                    showSeconds:
                      null == (ev = e1.countdown) ? void 0 : ev.showSeconds,
                    brideWeddingDate: null == (ef = e1.hero) ? void 0 : ef.date,
                    groomWeddingDate:
                      null == (eb = e1.hero) ? void 0 : eb.date2,
                    lang: e5,
                  }),
                  (0, n.jsx)(eC, {
                    brideName:
                      null == (eT = e1.couple) || null == (eN = eT.bride)
                        ? void 0
                        : eN.name,
                    groomName:
                      null == (eI = e1.couple) || null == (eP = eI.groom)
                        ? void 0
                        : eP.name,
                    theme: e1.theme,
                    image: null == (ez = e1.thankyou) ? void 0 : ez.coverImage,
                    side: e1.side,
                    title: null == (eD = e1.thankyou) ? void 0 : eD.title,
                    description:
                      null == (eV = e1.thankyou) ? void 0 : eV.description,
                    groomShortName:
                      null == (eA = e1.couple) || null == (e_ = eA.groom)
                        ? void 0
                        : e_.shortName,
                    brideShortName:
                      null == (eL = e1.couple) || null == (eE = eL.bride)
                        ? void 0
                        : eE.shortName,
                  }),
                  "vi" === e5 &&
                    (0, n.jsx)(ey, {
                      theme: e1.theme,
                      brideName:
                        null == (eH = e1.couple) || null == (eM = eH.bride)
                          ? void 0
                          : eM.name,
                      groomName:
                        null == (eq = e1.couple) || null == (eB = eq.groom)
                          ? void 0
                          : eB.name,
                      weddingDate: tF(
                        null == (eF = e1.hero) ? void 0 : eF.date,
                      ),
                      side: e1.side,
                      brideWeddingDate: tF(
                        null == (eR = e1.hero) ? void 0 : eR.date,
                      ),
                      groomWeddingDate: tF(
                        null == (eW = e1.hero) ? void 0 : eW.date2,
                      ),
                      groomShortName:
                        null == (eO = e1.couple) || null == (eG = eO.groom)
                          ? void 0
                          : eG.shortName,
                      brideShortName:
                        null == (eU = e1.couple) || null == (eQ = eU.bride)
                          ? void 0
                          : eQ.shortName,
                      hasBridalParty: ta,
                      hasGiftInfo: tt,
                    }),
                  (0, n.jsx)(ew, {
                    playlist: e1.playlist,
                    autoPlay: e9,
                    lang: e5,
                  }),
                  (0, n.jsx)(eS, { lang: e5 }),
                ],
              }),
              tn &&
                (0, n.jsx)(n.Fragment, {
                  children:
                    e4 &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)(l.P.div, {
                          initial: { x: 0 },
                          animate: { x: e3 ? "-100%" : 0 },
                          transition: {
                            duration: 1.5,
                            ease: [0.25, 1, 0.5, 1],
                          },
                          className:
                            "absolute top-0 left-0 w-1/2 h-full bg-background-v4 z-10 border-r border-white/20 overflow-hidden pointer-events-none",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-[80px] bg-[url('/path-to-lanterns.png')] bg-contain bg-repeat-x",
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-[45%] right-0 translate-x-1/2 -translate-y-1/2  w-full max-w-[300px] aspect-square flex items-center justify-center",
                              children: (0, n.jsx)("div", {
                                className:
                                  "w-full h-full text-foreground-v4 text-[100px] font-bold flex items-center justify-center",
                                children: "囍",
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)(l.P.div, {
                          initial: { x: 0 },
                          animate: { x: e3 ? "100%" : 0 },
                          transition: {
                            duration: 1.5,
                            ease: [0.25, 1, 0.5, 1],
                          },
                          className:
                            "absolute top-0 right-0 w-1/2 h-full bg-background-v4 z-10 border-l border-white/20 overflow-hidden pointer-events-none",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 right-0  w-full h-[80px] bg-[url('/path-to-lanterns.png')] bg-contain bg-repeat-x scale-x-[-1]",
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-[45%] left-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] aspect-square flex items-center justify-center",
                              children: (0, n.jsx)("div", {
                                className:
                                  "w-full h-full text-foreground-v4 text-[100px] font-bold flex items-center justify-center",
                                children: "囍",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                }),
            ],
          }),
        });
      }
      var tW = a(6926),
        tG = a.n(tW),
        tO = a(60003),
        tQ = a.n(tO),
        tU = a(28536),
        tY = a.n(tU),
        tK = a(17310),
        tX = a.n(tK);
      function tZ(e) {
        let { guestName: t, data: a, groomName: i, brideName: s, side: r } = e,
          o = ((e, t) => {
            if (!e) return null;
            let a = new Date(e),
              n = String(a.getDate()).padStart(2, "0"),
              i = String(a.getMonth() + 1).padStart(2, "0"),
              s = a.getFullYear();
            if (!t) return { day: n, month: i, year: s };
            let l = new Date(t),
              r = String(l.getDate()).padStart(2, "0"),
              o = String(l.getMonth() + 1).padStart(2, "0"),
              c = l.getFullYear();
            return {
              day: "".concat(n, "\xa0-\xa0").concat(r),
              month: i,
              year: s,
              isRange: !0,
              secondMonth: o,
              secondYear: c,
            };
          })(null == a ? void 0 : a.date, null == a ? void 0 : a.date2);
        return (0, n.jsx)("div", {
          className: "relative h-screen w-full overflow-hidden shadow-xl",
          children: (0, n.jsxs)("div", {
            className: "flex h-full flex-col px-5 pt-4 pb-12",
            children: [
              (0, n.jsx)("div", {
                className: "text-center",
                children: (0, n.jsx)("h1", {
                  className: "".concat(
                    tG().className,
                    " text-[16px] font-bold tracking-widest text-secondary",
                  ),
                  children: "THIỆP MỜI SINH NHẬT",
                }),
              }),
              (0, n.jsxs)("div", {
                className: ""
                  .concat(
                    tQ().className,
                    " mt-1 flex items-center justify-center font-normal text-secondary ",
                  )
                  .concat(
                    (null == a ? void 0 : a.date2)
                      ? "text-[34px]"
                      : "text-[40px]",
                  ),
                children: [
                  (0, n.jsx)("span", { children: null == o ? void 0 : o.day }),
                  (0, n.jsx)("span", { className: "mx-2", children: "." }),
                  (0, n.jsx)("span", {
                    children: null == o ? void 0 : o.month,
                  }),
                  (0, n.jsx)("span", { className: "mx-2", children: "." }),
                  (0, n.jsx)("span", { children: null == o ? void 0 : o.year }),
                ],
              }),
              "groom" === r
                ? (0, n.jsxs)("h2", {
                    className: "".concat(
                      tY().className,
                      " mt-2 flex items-center justify-center gap-2 text-[30px] leading-none text-accent",
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: i,
                      }),
                      (0, n.jsx)(l.P.div, {
                        animate: { scale: [1, 1.3, 1] },
                        transition: {
                          duration: 1.2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        children: (0, n.jsx)(A.A, {
                          className: "h-5 w-5 text-secondary mx-2",
                          fill: "var(--foreground)",
                          strokeWidth: 2,
                        }),
                      }),
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: s,
                      }),
                    ],
                  })
                : (0, n.jsxs)("h2", {
                    className: "".concat(
                      tY().className,
                      " mt-2 flex items-center justify-center gap-2 text-[34px] leading-none text-accent",
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: s,
                      }),
                      (0, n.jsx)(l.P.div, {
                        animate: { scale: [1, 1.3, 1] },
                        transition: {
                          duration: 1.2,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        children: (0, n.jsx)(A.A, {
                          className: "h-5 w-5 text-secondary mx-2",
                          fill: "var(--foreground)",
                          strokeWidth: 2,
                        }),
                      }),
                      (0, n.jsx)("span", {
                        className: "text-center",
                        children: i,
                      }),
                    ],
                  }),
              (0, n.jsxs)("div", {
                className:
                  "relative mx-auto mt-4 flex w-[70vw] md:w-[250px] flex-1 flex-col",
                children: [
                  (0, n.jsx)("div", {
                    className: "flex-1 border-[4px] border-border",
                    children: (0, n.jsx)("div", {
                      className: "relative h-full overflow-hidden bg-black",
                      children: (0, n.jsx)(m.default, {
                        src: (null == a ? void 0 : a.image) || "",
                        alt: "couple",
                        fill: !0,
                        className: "object-cover",
                        sizes: "100vw",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "mt-6 text-center",
                    children: [
                      (0, n.jsx)("p", {
                        className: "".concat(
                          tG().className,
                          "\n      text-[15px]\n      uppercase\n      tracking-[0.25em]\n      text-secondary\n      font-bold",
                        ),
                        children: "Tr\xe2n Trọng K\xednh Mời",
                      }),
                      (0, n.jsx)("h3", {
                        className: "".concat(
                          tX().className,
                          "\n      mt-3\n      text-[20px]\n      leading-none\n      text-[#3a322f]",
                        ),
                        children: t,
                      }),
                      (0, n.jsx)("div", {
                        className: "mx-auto h-px w-60 bg-[#c8b39b]/50",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var t$ = a(17005),
        tJ = a.n(t$);
      function t0(e) {
        let {
            weddingDate: t,
            image: a,
            groomWeddingDate: i,
            brideWeddingDate: s,
          } = e,
          r = new Date(t),
          o = r.getFullYear(),
          c = r.getMonth(),
          d = [];
        (i && d.push(new Date(i).getDate()),
          s && d.push(new Date(s).getDate()),
          i || s || d.push(r.getDate()));
        let u = new Date(o, c + 1, 0).getDate(),
          x = [
            ...Array((new Date(o, c, 1).getDay() + 6) % 7).fill(""),
            ...Array.from({ length: u }, (e, t) => String(t + 1)),
          ];
        return (0, n.jsxs)(l.P.div, {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, amount: 0.3 },
          transition: { duration: 1, ease: "easeOut" },
          className:
            "mx-auto mt-0 my-6 flex w-full max-w-2xl items-center justify-between bg-background p-6 px-3 shadow-xl text-white select-none",
          children: [
            (0, n.jsxs)("div", {
              className:
                "w-[42%] bg-[#f4f3ef] p-2 pb-4 shadow-md flex flex-col justify-between aspect-[3/4]",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "relative w-full h-[82%] bg-[#e2e0d9] overflow-hidden",
                  children: (0, n.jsx)(m.default, {
                    src:
                      a ||
                      "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779775623/660472421_1489207229234823_255262384024361533_n_byx6jt.jpg",
                    alt: "D\xe2u Rể",
                    fill: !0,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 100vw, 50vw",
                    loading: "lazy",
                    unoptimized: !0,
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "".concat(
                    tJ().className,
                    " text-[#4a5548] text-center text-lg mt-2 leading-none",
                  ),
                  children: "Save the date",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "w-[53%] flex flex-col justify-center pl-2",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "text-right text-base font-normal tracking-wide mb-4 pr-2 font-sans",
                  children: "Th\xe1ng "
                    .concat(String(c + 1).padStart(2, "0"), ".")
                    .concat(o),
                }),
                (0, n.jsx)("div", {
                  className:
                    "grid grid-cols-7 gap-y-3 text-center text-xs font-normal mb-2",
                  children: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map(
                    (e) => (0, n.jsx)("div", { children: e }, e),
                  ),
                }),
                (0, n.jsx)("div", {
                  className:
                    "grid grid-cols-7 gap-y-3 text-center text-xs font-light text-gray-200/90 font-mono",
                  children: x.map((e, t) => {
                    let a = Number(e),
                      i = d.filter((e) => e === a).length;
                    return (0, n.jsx)(
                      "div",
                      {
                        className:
                          "relative flex items-center justify-center h-7 w-7 mx-auto",
                        children:
                          i > 0
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(l.P.div, {
                                    className:
                                      "absolute inset-0 flex items-center justify-center scale-[1.4] text-[#f4f3ef]",
                                    animate: { scale: [1.2, 1.6, 1.2] },
                                    transition: {
                                      duration: 1.2,
                                      repeat: 1 / 0,
                                      ease: "easeInOut",
                                    },
                                    children: (0, n.jsx)(A.A, {
                                      fill: "#f4f3ef",
                                      stroke: "none",
                                      className: "w-[75%] h-[75%] transform",
                                    }),
                                  }),
                                  2 === i &&
                                    (0, n.jsx)(l.P.div, {
                                      className:
                                        "absolute inset-0 flex items-center justify-center scale-[1.4] text-[#f4f3ef]",
                                      animate: { scale: [1.1, 1.5, 1.1] },
                                      transition: {
                                        duration: 1.2,
                                        delay: 0.2,
                                        repeat: 1 / 0,
                                        ease: "easeInOut",
                                      },
                                      children: (0, n.jsx)(A.A, {
                                        fill: "#f4f3ef",
                                        stroke: "none",
                                        className:
                                          "w-[75%] h-[75%] transform opacity-70",
                                      }),
                                    }),
                                  (0, n.jsx)("span", {
                                    className:
                                      "relative z-10 font-bold text-background text-[13px]",
                                    children: e,
                                  }),
                                ],
                              })
                            : (0, n.jsx)("span", {
                                className: e ? "text-white" : "",
                                children: e,
                              }),
                      },
                      t,
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var t1 = a(17411),
        t2 = a.n(t1),
        t4 = a(67695),
        t5 = a.n(t4),
        t3 = a(48440),
        t6 = a.n(t3);
      let t8 = [
        {
          title: "Lễ Vu Quy",
          time: "09:00 - 10:30",
          address: "Số 45, Đường Phan Đ\xecnh Ph\xf9ng",
          area: "Quận Ba Đ\xecnh, H\xe0 Nội",
          mapUrl: "https://maps.google.com",
          icon: "\uD83C\uDFE0",
          image:
            "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779775573/660129470_1489207882568091_3952862681517529397_n_1_lt6f2e.jpg",
        },
        {
          title: "Lễ Th\xe0nh H\xf4n",
          time: "11:00 - 14:00",
          address: "White Palace",
          area: "123 Đường L\xe1ng, H\xe0 Nội",
          mapUrl: "https://maps.google.com",
          icon: "\uD83D\uDC92",
          image:
            "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779775567/658125302_1489207312568148_8465429175476541241_n_1_q4j8ka.jpg",
        },
      ];
      function t7(e) {
        var t;
        let { venues: a, dressColors: s = [], weddingId: r } = e,
          o = (0, i.useRef)(null),
          c = (0, z.W)(o, { once: !0, margin: "-100px" }),
          d = a || t8;
        return (0, n.jsx)("section", {
          id: "timeline",
          ref: o,
          className: "pb-12 bg-background",
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-6xl px-4 md:px-6",
            children: [
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0, y: 30 },
                animate: c ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "text-center",
                children: (0, n.jsx)("h2", {
                  className: "".concat(
                    t2().className,
                    "\n              py-5\n              text-[30px]\n              leading-none\n              text-white\n              md:text-[58px]\n            ",
                  ),
                  children:
                    "3d56a21c-a0ff-4f79-bc66-c5c6163d25ce" === r
                      ? "H\xf4n lễ được tổ chức"
                      : "Lịch tr\xecnh",
                }),
              }),
              (0, n.jsx)("div", {
                className: "grid gap-3 md:gap-6 ".concat(
                  d.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
                ),
                children: d.map((e, t) =>
                  (0, n.jsxs)(
                    l.P.div,
                    {
                      initial: { opacity: 0, y: 40 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, amount: 0.2 },
                      transition: { duration: 0.8, delay: 0.15 * t },
                      whileHover: { y: -5 },
                      className: " overflow-hidden  bg-[#faf8f5] shadow-md ",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "relative overflow-hidden h-70 md:h-[420px]",
                          children: [
                            (0, n.jsx)(m.default, {
                              src: e.image,
                              alt: e.title,
                              fill: !0,
                              className: "object-cover",
                              sizes: "(max-width: 768px) 100vw, 50vw",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                            (0, n.jsx)("div", {
                              className: "absolute inset-0 bg-black/10",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "p-3 md:p-5",
                          children: [
                            (0, n.jsx)("h3", {
                              className: "".concat(
                                t5().className,
                                "\n                    mb-3\n                    text-[20px]\n                    font-semibold\n                    text-secondary\n                    md:text-[28px]\n                  ",
                              ),
                              children: e.title,
                            }),
                            (0, n.jsxs)("div", {
                              className: "space-y-3",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex gap-2 items-center",
                                  children: [
                                    (0, n.jsx)(ea.A, {
                                      className:
                                        "mt-1 h-4 w-4 shrink-0 text-secondary",
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "".concat(
                                        t6().className,
                                        "\n                        text-[14px]\n                        tracking-[0.15em]\n                        text-[#8b6b54]\n                        md:text-sm\n                        font-medium\n                      ",
                                      ),
                                      children: e.time,
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    (0, n.jsx)(en.A, {
                                      className:
                                        "mt-1 h-4 w-4 shrink-0 text-secondary",
                                    }),
                                    (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("p", {
                                          className: "".concat(
                                            t5().className,
                                            "\n                          text-[17px]\n                          font-semibold\n                          text-[#3d3028]\n                          md:text-[17px]\n                          font-medium\n                        ",
                                          ),
                                          children: e.address,
                                        }),
                                        (0, n.jsx)("p", {
                                          className: "".concat(
                                            t5().className,
                                            "\n                          text-[15px]\n                          text-[#8b6b54]\n                          md:text-[14px]\n                          font-medium\n                        ",
                                          ),
                                          children: e.area,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.mapUrl &&
                              "" !== e.mapUrl.trim() &&
                              (0, n.jsxs)(l.P.a, {
                                href: e.mapUrl || "#",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: { scale: 1.03 },
                                whileTap: { scale: 0.97 },
                                className:
                                  "\n                    mt-4\n                    flex\n                    items-center\n                    justify-center\n                    gap-2\n                    rounded-full\n                    border\n                    border-secondary\n                    px-4\n                    py-2\n                    text-[10px]\n                    tracking-[0.15em]\n                    text-secondary\n                    transition-all\n                    hover:bg-secondary\n                    hover:text-white\n                    md:text-xs\n                    font-medium\n                  ",
                                children: [
                                  (0, n.jsx)(ei.A, { className: "h-4 w-4" }),
                                  "Chỉ đường",
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
              (null != (t = null == s ? void 0 : s.length) ? t : 0) > 0 &&
                (0, n.jsxs)(l.P.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.3 },
                  transition: { duration: 0.8 },
                  className:
                    " mt-12 border bg-[#faf8f5] p-8 text-center shadow-md ",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10",
                      children: (0, n.jsx)(es.A, {
                        className: "h-8 w-8 text-secondary",
                      }),
                    }),
                    (0, n.jsx)("h3", {
                      className: "".concat(
                        t5().className,
                        "\n                text-[15px]\n                tracking-[0.2em]\n                text-secondary\n                font-medium\n              ",
                      ),
                      children: "M\xc0U TRANG PHỤC",
                    }),
                    (0, n.jsx)("p", {
                      className: "".concat(
                        t5().className,
                        "\n                mt-1\n                italic\n                text-[#8b6b54]\n              ",
                      ),
                      children: "Dress Code",
                    }),
                    (0, n.jsx)("div", {
                      className: "mt-6 flex flex-wrap justify-center gap-4",
                      children: s.map((e, t) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className:
                              " h-12 w-12 rounded-full border border-[#e8d9c9] transition-transform hover:scale-105 md:h-16 md:w-16 ",
                            style: {
                              backgroundColor: e,
                              boxShadow: "0 6px 15px rgba(0,0,0,.08)",
                            },
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      var t9 = a(57469),
        ae = a.n(t9);
      let at = [
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777117340/476589360_1052589936909553_6232669697745345496_n_bn5ljh.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777117340/518275637_1173940161441196_7011014911912099565_n_wwgudn.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777117322/469837820_1007579698077244_746720596022190017_n_twc7i0.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777116958/469885763_1007580621410485_5563157958127324110_n-1536x1024_vhj748.jpg",
          },
        ],
        aa = [
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115924/QT000704_ufpkgt.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115924/QT000697_tues4e.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115924/QT000705_c12zfq.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115925/QT000908_orelhj.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777115925/QT001024_sf6jy5.jpg",
          },
          {
            src: "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1777116682/QT000937_ag6xlo.jpg",
          },
        ],
        an = [{ src: "" }, { src: "" }, { src: "" }, { src: "" }, { src: "" }],
        ai = [{ src: "" }, { src: "" }];
      function as(e) {
        let { images: t, lang: a = "vi", title: s } = e,
          r = (0, i.useRef)(null),
          o = (null == t ? void 0 : t.landscape) || at,
          c = (null == t ? void 0 : t.portrait) || aa,
          u = (null == t ? void 0 : t.loveFlowey) || an,
          x = (null == t ? void 0 : t.editorial) || ai,
          [h, p] = (0, i.useState)(0),
          [g, v] = (0, i.useState)(0),
          [f, b] = (0, i.useState)(!1),
          [j, y] = (0, i.useState)(3),
          [N, k] = (0, i.useState)(null),
          C = (0, i.useMemo)(
            () =>
              [...o, ...c, ...u, ...x].filter((e) =>
                null == e ? void 0 : e.src,
              ),
            [o, c, u, x],
          );
        (0, i.useEffect)(() => {
          let e = setInterval(() => {
            p((e) => (e + 1) % o.length);
          }, 4e3);
          return () => clearInterval(e);
        }, [o.length]);
        let T = (e) => {
            let t = C.findIndex((t) => t.src === e);
            -1 !== t && k(t);
          },
          P = () => k(null),
          S = () =>
            k((e) => (0 === e ? C.length - 1 : (null != e ? e : 0) - 1)),
          I = () =>
            k((e) => (e === C.length - 1 ? 0 : (null != e ? e : 0) + 1)),
          z = c.slice(g, g + j);
        (0, i.useEffect)(() => {
          let e = () => {
            (window.innerWidth, y(20));
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let D = o.some((e) => (null == e ? void 0 : e.src)),
          V = c.some((e) => (null == e ? void 0 : e.src)),
          _ = u.some((e) => (null == e ? void 0 : e.src)),
          A = x.some((e) => (null == e ? void 0 : e.src));
        return C.length > 0
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("section", {
                  className: "py-10 md:py-20 pb-0 md:pb-0 pt-4 md:pt-4",
                  ref: r,
                  id: "gallery",
                  children: (0, n.jsxs)("div", {
                    className: "mx-auto max-w-[1200px] px-6 text-center",
                    children: [
                      (0, n.jsx)("h2", {
                        className: "".concat(
                          ae().className,
                          "\n              mt-2\n              text-[30px]\n              leading-none\n              text-secondary\n              md:text-[58px]\n              text-center\n              mb-6\n            ",
                        ),
                        children: (null == s ? void 0 : s.trim())
                          ? s
                          : "en" === a
                            ? d.nR.title.en
                            : "ko" === a
                              ? d.nR.title.ko
                              : "Album ảnh",
                      }),
                      D &&
                        (0, n.jsx)(n.Fragment, {
                          children: (0, n.jsx)("div", {
                            className:
                              "relative h-[300px] w-full overflow-hidden shadow-lg md:h-[520px]",
                            children: o.map((e, t) =>
                              (0, n.jsxs)(
                                l.P.div,
                                {
                                  className: "absolute inset-0 cursor-pointer",
                                  initial: { opacity: 0, scale: 1.05 },
                                  whileInView: { scale: 1 },
                                  viewport: { once: !0 },
                                  animate: { opacity: +(t === h) },
                                  transition: {
                                    opacity: { duration: 1 },
                                    scale: { duration: 1.2 },
                                  },
                                  onClick: () => T(e.src),
                                  children: [
                                    (0, n.jsx)(m.default, {
                                      src: e.src,
                                      alt: "",
                                      fill: !0,
                                      className: "object-cover",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "absolute inset-0 bg-black/10",
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        }),
                    ],
                  }),
                }),
                V &&
                  (0, n.jsx)("section", {
                    className: "pb-10 md:pb-20",
                    children: (0, n.jsx)("div", {
                      className: "relative mx-auto max-w-[1200px] px-6",
                      children: (0, n.jsx)("div", {
                        className: "grid grid-cols-2 gap-2 md:grid-cols-3",
                        onMouseEnter: () => b(!0),
                        onMouseLeave: () => b(!1),
                        children: z.map((e, t) =>
                          (0, n.jsx)(
                            l.P.div,
                            {
                              className:
                                "relative aspect-[3/4] cursor-pointer overflow-hidden",
                              initial: {
                                opacity: 0,
                                x: t % 3 == 0 ? -100 : 100 * (t % 3 == 2),
                                y: 30,
                                scale: 0.9,
                              },
                              whileInView: { opacity: 1, x: 0, scale: 1 },
                              viewport: { once: !0, amount: 0.2 },
                              transition: {
                                duration: 0.8,
                                delay: 0.08 * t,
                                ease: "easeOut",
                              },
                              whileHover: { scale: 1.03 },
                              onClick: () => T(e.src),
                              children: (0, n.jsx)(m.default, {
                                src: e.src,
                                alt: "",
                                fill: !0,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    }),
                  }),
                null !== N &&
                  (0, n.jsxs)(l.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className:
                      "fixed inset-0 z-50 flex items-center justify-center bg-black/95",
                    onClick: P,
                    children: [
                      (0, n.jsx)("button", {
                        onClick: P,
                        className:
                          "absolute right-4 top-4 z-[60] cursor-pointer text-white",
                        children: (0, n.jsx)(w.A, { size: 32 }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "absolute left-4 top-4 z-[60] rounded-full bg-black/30 px-3 py-1 text-sm md:text-base text-white/90 backdrop-blur-sm",
                        children: ["(", N + 1, "/", C.length, ")"],
                      }),
                      (0, n.jsx)("button", {
                        onClick: (e) => {
                          (e.stopPropagation(), S());
                        },
                        className:
                          "cursor-pointer absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white md:left-6",
                        children: (0, n.jsx)(eK.A, { size: 24 }),
                      }),
                      (0, n.jsx)(l.P.div, {
                        className:
                          "relative h-[100vh] w-[100vw] max-w-5xl touch-pan-y",
                        onClick: (e) => e.stopPropagation(),
                        drag: "x",
                        dragConstraints: { left: 0, right: 0 },
                        onDragEnd: (e, t) => {
                          t.offset.x < -80 ? I() : t.offset.x > 80 && S();
                        },
                        style: { touchAction: "pan-y" },
                        children: (0, n.jsx)(m.default, {
                          src: C[N].src,
                          alt: "",
                          fill: !0,
                          className: "select-none object-contain",
                          draggable: !1,
                          sizes: "(max-width: 768px) 100vw, 50vw",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, n.jsx)("button", {
                        onClick: (e) => {
                          (e.stopPropagation(), I());
                        },
                        className:
                          "cursor-pointer absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white md:right-6",
                        children: (0, n.jsx)(eX.A, { size: 24 }),
                      }),
                    ],
                  }),
                _ &&
                  (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("section", {
                      className: "pb-10 md:pb-16",
                      children: (0, n.jsx)("div", {
                        className: "mx-auto max-w-[1200px] px-4 md:px-6",
                        children: (0, n.jsxs)("div", {
                          className:
                            "grid grid-cols-1 gap-4 overflow-hidden md:gap-5 lg:grid-cols-2",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "p-1 md:h-[640px] md:p-2 md:pb-20 md:pt-10",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "grid h-full grid-cols-[1.15fr_0.85fr] gap-2",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        "mt-1 flex h-full flex-col pt-10 md:mt-4 md:pt-20",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className:
                                            "mb-2 mt-0 pl-1 text-center md:mt-[-23px] md:pb-8",
                                          children: (0, n.jsx)("h2", {
                                            className:
                                              "text-[20px] leading-none tracking-[0.14em] text-[#555] sm:text-[24px] md:text-[24px] md:tracking-[0.18em] font-thin italic",
                                            children: "FOREVER YOUNG",
                                          }),
                                        }),
                                        (0, n.jsx)(l.P.div, {
                                          initial: { opacity: 0, x: -80 },
                                          whileInView: { opacity: 1, x: 0 },
                                          viewport: { once: !0, amount: 0.2 },
                                          transition: {
                                            duration: 0.8,
                                            ease: "easeOut",
                                          },
                                          className:
                                            "relative min-h-[240px] flex-1 cursor-pointer overflow-hidden sm:min-h-[320px] md:min-h-0",
                                          onClick: () => T(u[0].src),
                                          children: (0, n.jsx)(m.default, {
                                            src: u[0].src,
                                            alt: "",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes:
                                              "(max-width: 768px) 100vw, 50vw",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "mt-1 flex h-full flex-col gap-2 md:mt-4",
                                      children: [
                                        (0, n.jsx)(l.P.div, {
                                          initial: { opacity: 0, x: 50 },
                                          whileInView: { opacity: 1, x: 0 },
                                          viewport: { once: !0, amount: 0.2 },
                                          transition: {
                                            duration: 0.7,
                                            delay: 0.15,
                                          },
                                          whileHover: { scale: 1.015 },
                                          className:
                                            "relative min-h-[115px] flex-1 cursor-pointer overflow-hidden sm:min-h-[155px] md:min-h-0",
                                          onClick: () => T(u[1].src),
                                          children: (0, n.jsx)(m.default, {
                                            src: u[1].src,
                                            alt: "",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes:
                                              "(max-width: 768px) 100vw, 50vw",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, n.jsx)(l.P.div, {
                                          initial: { opacity: 0, x: 50 },
                                          whileInView: { opacity: 1, x: 0 },
                                          viewport: { once: !0, amount: 0.2 },
                                          transition: {
                                            duration: 0.7,
                                            delay: 0.3,
                                          },
                                          whileHover: { scale: 1.015 },
                                          className:
                                            "relative min-h-[115px] flex-1 cursor-pointer overflow-hidden sm:min-h-[155px] md:min-h-0",
                                          onClick: () => T(u[2].src),
                                          children: (0, n.jsx)(m.default, {
                                            src: u[2].src,
                                            alt: "",
                                            fill: !0,
                                            className: "object-cover",
                                            sizes:
                                              "(max-width: 768px) 100vw, 50vw",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className:
                                    "mx-auto mt-3 max-w-[360px] px-2 text-center text-[12px] font-normal leading-relaxed text-gray-700 sm:text-[14x] md:mt-7 md:text-[14px]",
                                  children:
                                    "Life is made of little moments, and today is one worth celebrating",
                                }),
                              ],
                            }),
                            (0, n.jsx)(l.P.div, {
                              initial: { opacity: 0, x: 80 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: !0, amount: 0.2 },
                              transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut",
                              },
                              whileHover: { scale: 1.01 },
                              className:
                                "relative mt-[54px] h-[330px] cursor-pointer overflow-hidden sm:h-[420px] md:mt-0 md:h-[620px]",
                              onClick: () => T(u[3].src),
                              children: (0, n.jsx)(m.default, {
                                src: u[3].src,
                                alt: "",
                                fill: !0,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 100vw, 50vw",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                A &&
                  (0, n.jsx)("section", {
                    className: "pb-12 md:pb-16",
                    children: (0, n.jsx)("div", {
                      className: "mx-auto max-w-[320px] px-4 sm:max-w-[360px]",
                      children: (0, n.jsxs)("div", {
                        className:
                          "relative overflow-hidden bg-[#f5f4f2] p-3 sm:p-4",
                        children: [
                          (0, n.jsx)("div", {
                            className: "absolute inset-0 opacity-[0.12]",
                            children: (0, n.jsx)(m.default, {
                              src: x[0].src,
                              alt: "",
                              fill: !0,
                              className: "scale-110 object-cover grayscale",
                              sizes: "(max-width: 768px) 100vw, 50vw",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className: "relative z-10",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "grid grid-cols-2 gap-2 sm:gap-3",
                                children: [
                                  (0, n.jsx)(l.P.div, {
                                    initial: { opacity: 0, x: -50 },
                                    whileInView: { opacity: 1, x: 0 },
                                    viewport: { once: !0, amount: 0.3 },
                                    transition: { duration: 0.8 },
                                    whileHover: { scale: 1.02 },
                                    className:
                                      "relative aspect-[3/4] cursor-pointer overflow-hidden border-[4px] border-white sm:border-[6px]",
                                    onClick: () => T(x[0].src),
                                    children: (0, n.jsx)(m.default, {
                                      src: x[1].src,
                                      alt: "",
                                      fill: !0,
                                      className: "object-cover",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsx)(l.P.div, {
                                    initial: { opacity: 0, x: 50 },
                                    whileInView: { opacity: 1, x: 0 },
                                    viewport: { once: !0, amount: 0.3 },
                                    transition: { duration: 0.8, delay: 0.15 },
                                    whileHover: { scale: 1.02 },
                                    className:
                                      "relative aspect-[3/4] cursor-pointer overflow-hidden border-[4px] border-white sm:border-[6px]",
                                    onClick: () => T(x[1].src),
                                    children: (0, n.jsx)(m.default, {
                                      src: x[2].src,
                                      alt: "",
                                      fill: !0,
                                      className: "object-cover",
                                      sizes: "(max-width: 768px) 100vw, 50vw",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsx)(l.P.div, {
                                initial: { opacity: 0, y: 30 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                transition: { duration: 0.8, delay: 0.3 },
                                className: "pb-2 pt-4 text-center sm:pt-5",
                                children: (0, n.jsxs)("h2", {
                                  className:
                                    "text-[18px] leading-[1.15] tracking-[0.06em] text-[#222] sm:text-[20px] md:text-[22px] md:tracking-[0.08em] font-serif",
                                  children: [
                                    "BIRTHDAY MEMORIES",
                                    (0, n.jsx)("br", {}),
                                    "TO REMEMBER",
                                  ],
                                }),
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "px-2 text-center text-[9px] italic tracking-wide text-[#777] sm:text-[10px]",
                                children:
                                  "Here's to another year of happiness, dreams, and unforgettable moments.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            })
          : null;
      }
      var al = a(42065),
        ar = a.n(al);
      function ao(e) {
        let { weddingDate: t = "2026-05-18T08:00:00" } = e,
          [a, s] = (0, i.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
        (0, i.useEffect)(() => {
          let e = () => {
            let e =
              new Date(
                /^\d{4}-\d{2}-\d{2}$/.test(t) ? "".concat(t, "T00:00:00") : t,
              ).getTime() - Date.now();
            return e <= 0
              ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
              : {
                  days: Math.floor(e / 864e5),
                  hours: Math.floor((e / 36e5) % 24),
                  minutes: Math.floor((e / 1e3 / 60) % 60),
                  seconds: Math.floor((e / 1e3) % 60),
                };
          };
          s(e());
          let a = setInterval(() => {
            s(e());
          }, 1e3);
          return () => clearInterval(a);
        }, [t]);
        let l = [
          { label: "Ng\xe0y", value: a.days },
          { label: "Giờ", value: a.hours },
          { label: "Ph\xfat", value: a.minutes },
          { label: "Gi\xe2y", value: a.seconds },
        ];
        return (0, n.jsxs)("div", {
          className: "mx-auto my-6 w-full max-w-sm text-center select-none",
          children: [
            (0, n.jsx)("p", {
              className: "".concat(
                ar().className,
                " mb-4 text-sm uppercase tracking-[0.2em] text-border font-semibold",
              ),
              children: "Đếm ngược đến ng\xe0y sinh nhật",
            }),
            (0, n.jsx)("div", {
              className: "flex justify-center gap-3",
              children: l.map((e, t) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: "flex flex-col items-center",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "flex h-16 w-14 items-center justify-center rounded-xl bg-background text-2xl font-medium tracking-tight text-[#fdfbf7] shadow-[0_4px_14px_rgba(128,24,24,0.15)] border border-border",
                        children: String(e.value).padStart(2, "0"),
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "mt-2 text-[11px] font-medium tracking-wider text-border",
                        children: e.label,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      }
      var ac = a(35893),
        ad = a.n(ac),
        am = a(92837),
        au = a.n(am);
      function ax(e) {
        let {
          image: t,
          brideName: a,
          groomName: i,
          title: s,
          description: r,
        } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "relative mx-auto w-full max-w-2xl overflow-hidden bg-background shadow-2xl select-none",
            children: [
              (0, n.jsxs)("div", {
                className: "relative aspect-[3/4] w-full",
                children: [
                  (0, n.jsx)(m.default, {
                    src:
                      t ||
                      "https://res.cloudinary.com/dsdtqkkbm/image/upload/v1779161912/495124772_1248101253348957_299538864696859072_n_v8yda7.jpg",
                    alt: "Thank you from the couple",
                    fill: !0,
                    className: "object-cover object-top",
                    sizes: "(max-width: 768px) 100vw, 50vw",
                    loading: "lazy",
                    unoptimized: !0,
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent",
                  }),
                  (0, n.jsx)("div", {
                    className: "absolute bottom-4 left-0 right-0 text-center",
                    children: (0, n.jsx)("p", {
                      className: "".concat(
                        ad().className,
                        " text-[26px] text-white/90",
                      ),
                      children: s || "Rất h\xe2n hạnh được đ\xf3n tiếp",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "bg-background pb-12 pt-6 text-center",
                children: [
                  (0, n.jsx)("h2", {
                    className: "".concat(
                      au().className,
                      " text-[54px] font-medium tracking-[0.25em] text-white leading-none mr-[-0.25em]",
                    ),
                    children: "THANK YOU",
                  }),
                  (0, n.jsx)("div", {
                    className: "mx-auto my-5 h-[1px] w-16 bg-white/20",
                  }),
                  (0, n.jsx)("p", {
                    className: "".concat(
                      au().className,
                      " text-[13px] uppercase tracking-[0.4em] text-white/60 px-6 font-medium",
                    ),
                    children: r || "Hẹn gặp bạn trong ng\xe0y sinh nhật!!!",
                  }),
                ],
              }),
              (0, n.jsx)(l.P.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.8 },
                className: "my-10 h-px bg-background/20 mb-0",
              }),
              (0, n.jsx)(l.P.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className:
                  "flex flex-col items-center justify-between gap-4 text-center text-sm text-background/60 p-4",
                children: (0, n.jsxs)("div", {
                  className:
                    "text-xs text-background/40 text-center md:text-right space-x-2",
                  children: [
                    (0, n.jsxs)("span", {
                      children: [
                        "Wedding Invitation by",
                        " ",
                        (0, n.jsx)("a", {
                          href: "https://suns-wedding.vercel.app/",
                          target: "_blank",
                          className:
                            "hover:text-background transition underline",
                          children: "Suns",
                        }),
                        " ",
                        "with love •",
                        " ",
                        (0, n.jsx)("a", {
                          href: "https://zalo.me/0389183498",
                          target: "_blank",
                          className: "hover:text-background transition",
                          children: "Zalo",
                        }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      className: "text-background/30",
                      children: "|",
                    }),
                    (0, n.jsx)("a", {
                      href: "https://tiktok.com/@thiepcuoionlinesunsss",
                      target: "_blank",
                      className: "hover:text-background transition",
                      children: "TikTok",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var ah = a(38170),
        ap = a.n(ah);
      function ag(e) {
        let { item: t, active: a } = e,
          [s, r] = (0, i.useState)(!1),
          o = t.message.length > 140;
        return (0, n.jsxs)(l.P.div, {
          whileHover: { y: -8 },
          animate: {
            boxShadow: a
              ? "0 20px 40px rgba(0,0,0,0.12)"
              : "0 10px 20px rgba(0,0,0,0.05)",
          },
          className:
            " relative rounded-xl bg-card p-8 shadow-lg min-h-[180px] transition-all duration-300 ease-out group ",
          children: [
            (0, n.jsx)("div", {
              className: "absolute -top-4 left-6",
              children: (0, n.jsx)("div", {
                className:
                  "flex h-10 w-10 items-center justify-center rounded-full bg-ring shadow-lg transition-transform duration-300 group-hover:scale-110",
                children: (0, n.jsx)(ed.A, {
                  className: "h-5 w-5 text-primary-foreground",
                }),
              }),
            }),
            (0, n.jsx)("p", {
              className:
                " mb-6 mt-4 text-sm leading-relaxed italic text-muted-foreground transition-colors duration-300 group-hover:text-background ",
              children: s || !o ? t.message : t.message.slice(0, 90) + "...",
            }),
            o &&
              (0, n.jsx)("button", {
                onClick: () => r(!s),
                className:
                  " text-xs text-primary hover:underline transition-all duration-200 group-hover:tracking-wide ",
                children: s ? "Thu gọn" : "Xem th\xeam",
              }),
            (0, n.jsx)("div", {
              className: "mt-4 border-t border-border pt-4",
              children: (0, n.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "font-medium text-muted-foreground transition-colors text-sm",
                        children: t.name,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: t.relationship,
                      }),
                    ],
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[11px] text-muted-foreground/70 whitespace-nowrap",
                    children: (0, T.Yq)(t.createdAt),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function av(e) {
        let { refreshKey: t, weddingId: a, coverImage: s } = e,
          r = (0, i.useRef)(null),
          o = (0, z.W)(r, { once: !0 }),
          c = (0, i.useRef)(null),
          [d, m] = (0, i.useState)(!1),
          [u, x] = (0, i.useState)([]),
          [h, p] = (0, i.useState)(1),
          [g, v] = (0, i.useState)(!0),
          [f, b] = (0, i.useState)(!1),
          [j, y] = (0, i.useState)(0);
        ((0, i.useEffect)(() => {
          document.body.style.overflow = d ? "hidden" : "auto";
        }, [d]),
          (0, i.useEffect)(() => {
            (N(1, !0), p(1));
          }, [t, a]));
        let N = async function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (f) return;
            b(!0);
            let n = await fetch(
                "/api/rsvp?weddingId="
                  .concat(a, "&page=")
                  .concat(e, "&limit=10"),
              ),
              i = await n.json();
            (x((e) => (t ? i.data : [...e, ...i.data])),
              y(i.total),
              v(i.hasMore),
              b(!1));
          },
          [w, k] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            if (u.length < 2) return;
            let e = setInterval(() => {
              k((e) => (e + 1) % Math.min(3, u.length));
            }, 2e3);
            return () => clearInterval(e);
          }, [u.length]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("section", {
                id: "wishes",
                ref: r,
                className: "py-20 md:py-32 bg-background",
                children: (0, n.jsxs)("div", {
                  className: "mx-auto max-w-6xl px-6",
                  children: [
                    (0, n.jsx)(l.P.div, {
                      initial: { opacity: 0, y: 30 },
                      animate: o ? { opacity: 1, y: 0 } : {},
                      className: "text-center mb-12",
                      children: (0, n.jsx)("h2", {
                        className: "".concat(
                          ap().className,
                          "\n              mt-2\n              text-[30px]\n              leading-none\n              text-white\n              md:text-[58px]\n              text-center\n              mb-6\n            ",
                        ),
                        children: "Những lời ch\xfac tốt đẹp",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "grid md:grid-cols-3 gap-6",
                      children: u
                        .slice(0, 3)
                        .map((e, t) =>
                          (0, n.jsx)(
                            l.P.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: {
                                opacity: +!!o,
                                y: 20 * !o,
                                scale: w === t ? 1.03 : 1,
                                translateY: w === t ? -12 : 0,
                              },
                              transition: {
                                opacity: { duration: 0.6 },
                                y: { duration: 0.6 },
                                scale: { duration: 0.5 },
                                translateY: { duration: 0.5 },
                              },
                              children: (0, n.jsx)(ag, {
                                item: e,
                                active: w === t,
                              }),
                            },
                            t,
                          ),
                        ),
                    }),
                    (0, n.jsxs)("div", {
                      className: "mt-8 flex flex-col items-center gap-3",
                      children: [
                        (0, n.jsxs)("button", {
                          onClick: () => m(!0),
                          className:
                            " cursor-pointer rounded-full bg-primary px-6 py-3 text-xs text-white shadow transition-all duration-300 ease-out hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 ",
                          children: ["XEM TẤT CẢ (", j, ")"],
                        }),
                        (0, n.jsxs)("button", {
                          onClick: () => {
                            var e;
                            null == (e = document.getElementById("rsvp")) ||
                              e.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            " cursor-pointer inline-flex items-center gap-2 text-sm text-white/90 transition-opacity duration-300 hover:opacity-80 ",
                          children: [
                            (0, n.jsx)(l.P.span, {
                              animate: { y: [0, -2, 0], rotate: [-5, 5, -5] },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: "✨",
                            }),
                            (0, n.jsx)(l.P.span, {
                              animate: { y: [0, -1.5, 0] },
                              transition: {
                                duration: 2.2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              className: "underline",
                              children: "Gửi lời ch\xfac",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              d &&
                (0, n.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4",
                  onClick: (e) => {
                    c.current && !c.current.contains(e.target) && m(!1);
                  },
                  children: (0, n.jsxs)("div", {
                    ref: c,
                    className:
                      "w-full max-w-6xl h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl flex relative",
                    children: [
                      (0, n.jsx)("button", {
                        onClick: () => m(!1),
                        className:
                          "cursor-pointer absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60",
                        children: "✕",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          " hidden md:block relative flex-[0_0_60%] max-w-[580px] h-full overflow-hidden text-center ",
                        children: [
                          (0, n.jsx)("img", {
                            src: s,
                            className: "w-full h-full object-cover",
                          }),
                          (0, n.jsx)("div", {
                            className: "absolute inset-0 bg-black/10",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex-1 min-w-0 bg-background flex flex-col h-full overflow-hidden",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "shrink-0 bg-background p-6 border-b border-border/40",
                            children: [
                              (0, n.jsx)("h2", {
                                className: "text-xl font-serif",
                                children: "\uD83D\uDC8C Lời ch\xfac",
                              }),
                              (0, n.jsxs)("p", {
                                className: "text-xs text-foreground mt-1",
                                children: [
                                  "Tổng cộng ",
                                  (0, n.jsx)("strong", { children: j }),
                                  " lời ch\xfac • Cuộn xuống để xem th\xeam",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            onScroll: (e) => {
                              let t = e.currentTarget;
                              if (
                                t.scrollTop + t.clientHeight >=
                                  t.scrollHeight - 50 &&
                                g &&
                                !f
                              ) {
                                let e = h + 1;
                                (p(e), N(e));
                              }
                            },
                            children: [
                              u.map((e, t) =>
                                (0, n.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "mb-4 p-4 rounded-xl bg-card shadow-sm",
                                    children: [
                                      (0, n.jsx)("p", {
                                        className:
                                          "text-sm italic leading-relaxed text-muted-foreground",
                                        children: e.message,
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "my-3 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "flex items-end justify-between gap-3",
                                        children: [
                                          (0, n.jsxs)("div", {
                                            children: [
                                              (0, n.jsx)("p", {
                                                className:
                                                  "text-sm font-semibold text-muted-foreground",
                                                children: e.name,
                                              }),
                                              (0, n.jsx)("p", {
                                                className:
                                                  "mt-1 text-xs text-muted-foreground",
                                                children: e.relationship,
                                              }),
                                            ],
                                          }),
                                          e.createdAt &&
                                            (0, n.jsx)("p", {
                                              className:
                                                "shrink-0 text-[11px] text-muted-foreground",
                                              children: (0, T.Yq)(e.createdAt),
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                              f &&
                                (0, n.jsx)("p", {
                                  className:
                                    "text-center text-xs text-muted-foreground py-4",
                                  children: "Đang tải...",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      var af = a(59856),
        ab = a.n(af);
      function aj(e) {
        var t, a, s, r, o, c, d, u, x;
        let {
          weddingId: h,
          onSuccess: p,
          theme: g,
          people: v,
          brideName: f,
          groomName: b,
          thankYouImage: j,
          features: y,
        } = e;
        null == y || y.requireInvitedBy;
        let N = null == (c = null == y ? void 0 : y.requireAttending) || c,
          w = null == (d = null == y ? void 0 : y.requireNoOfAttendee) || d,
          [k, C] = (0, i.useState)(!1),
          P = (0, i.useRef)(null),
          S = (0, i.useRef)(null),
          I = (0, i.useRef)(null),
          [D, V] = (0, i.useState)(!1),
          _ = (0, z.W)(S, { once: !0, margin: "-100px" }),
          [E, L] = (0, i.useState)(!1),
          [M, H] = (0, i.useState)({
            name: "",
            nickname: "",
            invitedBy: "",
            guests: "",
            attending: "",
            message: "",
          }),
          B = async (e) => {
            if ((e.preventDefault(), !k)) {
              if (
                !M.name ||
                (N && !M.attending) ||
                (w && "yes" === M.attending && !M.guests) ||
                !M.message
              )
                return void alert(
                  "".concat(
                    (0, T.as)(g),
                    " Vui l\xf2ng điền đầy đủ th\xf4ng tin để gửi lời ch\xfac nh\xe9",
                  ),
                );
              try {
                (C(!0),
                  await fetch("/api/rsvp", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      weddingId: h,
                      name: M.name,
                      nickname: M.nickname,
                      comingFrom: M.invitedBy,
                      attending: M.attending,
                      numberOfGuests: Number(M.guests),
                      message: M.message,
                    }),
                  }),
                  null == p || p(),
                  L(!0),
                  setTimeout(() => {
                    var e;
                    null == (e = document.getElementById("rsvp")) ||
                      e.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100));
              } catch (e) {
                console.error(e);
              } finally {
                C(!1);
              }
            }
          };
        (0, i.useEffect)(() => {
          let e = (e) => {
            P.current && !P.current.contains(e.target) && V(!1);
          };
          return (
            document.addEventListener("mousedown", e),
            () => document.removeEventListener("mousedown", e)
          );
        }, []);
        let q = (e) => {
            let { name: t, value: a } = e.target;
            if ("attending" === t) {
              if ("maybe" === a || "no" === a)
                return void H({ ...M, attending: a, guests: "0" });
              if ("yes" === a)
                return void H({ ...M, attending: a, guests: "" });
            }
            H({ ...M, [t]: a });
          },
          F =
            ((u = M.attending),
            (x = M.name),
            {
              yes: {
                title: "Cảm ơn"
                  .concat(x ? " ".concat(x) : "", " rất nhiều ")
                  .concat((0, T.as)(g)),
                desc: "Sự hiện diện của bạn sẽ g\xf3p phần l\xe0m cho buổi tiệc th\xeam trọn vẹn v\xe0 \xfd nghĩa. Hẹn gặp bạn nh\xe9!",
              },
              maybe: {
                title: "Cảm ơn"
                  .concat(x ? " ".concat(x) : "", " rất nhiều ")
                  .concat((0, T.as)(g)),
                desc: "Hy vọng bạn sẽ sắp xếp được thời gian để c\xf9ng chung vui trong bữa tiệc nh\xe9!",
              },
              no: {
                title: "Cảm ơn"
                  .concat(x ? " ".concat(x) : "", " rất nhiều ")
                  .concat((0, T.as)(g)),
                desc: "D\xf9 kh\xf4ng thể tham dự, những lời ch\xfac của bạn vẫn l\xe0 m\xf3n qu\xe0 \xfd nghĩa d\xe0nh cho buổi tiệc.",
              },
            }[u] || {
              title: "Cảm ơn"
                .concat(x ? " ".concat(x) : "", " rất nhiều ")
                .concat((0, T.as)(g)),
              desc: "Phản hồi của bạn đ\xe3 được ghi nhận. Cảm ơn bạn rất nhiều!",
            });
        (null == (a = v.find((e) => "groom" === e.value)) ||
          null == (t = a.img) ||
          t.trim(),
          null == (r = v.find((e) => "bride" === e.value)) ||
            null == (s = r.img) ||
            s.trim(),
          null == (o = v.find((e) => "both" === e.value)) || o.img);
        let R =
          "w-full rounded-xl border border-border-input bg-cream px-4 py-3 text-color-input placeholder:text-[#b8b1a8] focus:outline-none focus:ring-2 focus:ring-focus-ring/40 focus:border-focus-ring transition";
        return (0, n.jsx)("section", {
          id: "rsvp",
          className: "py-20 md:py-32",
          ref: S,
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-3xl px-6",
            children: [
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 40 },
                animate: _ ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "mb-16 text-center",
                children: [
                  (0, n.jsx)("h2", {
                    className: "".concat(
                      ab().className,
                      "\n              mt-2\n              text-[30px]\n              leading-none\n              text-secondary\n              md:text-[58px]\n              text-center\n              mb-6\n            ",
                    ),
                    children: "Gửi lời ch\xfac v\xe0 x\xe1c nhận tham dự",
                  }),
                  (0, n.jsx)("p", {
                    className: "mt-4 text-muted-foreground text-sm",
                    children:
                      "Mỗi lời ch\xfac của bạn đều l\xe0 niềm hạnh ph\xfac với m\xecnh.",
                  }),
                ],
              }),
              E
                ? (0, n.jsxs)(l.P.div, {
                    className: "rounded-2xl bg-card p-12 text-center shadow-lg",
                    children: [
                      (0, n.jsx)(l.P.div, {
                        initial: { opacity: 0, scale: 0.9 },
                        whileInView: { opacity: 1, scale: 1 },
                        transition: { duration: 1 },
                        viewport: { once: !0 },
                        className:
                          "mx-auto relative mb-4 h-50 w-50 overflow-hidden rounded-full shadow-xl md:h-70 md:w-70",
                        children: (0, n.jsx)(m.default, {
                          src: j,
                          alt: "Bride and Groom",
                          fill: !0,
                          className: "object-cover",
                          sizes: "(max-width: 768px) 100vw, 50vw",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, n.jsx)("h3", {
                        className:
                          "font-serif md:text-2xl text-xl text-muted-foreground",
                        children: F.title,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-muted-foreground",
                        children: F.desc,
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "mt-6 flex items-center justify-center gap-2 text-primary",
                        children: [
                          (0, n.jsx)(A.A, {
                            className: "h-5 w-5 fill-primary",
                          }),
                          (0, n.jsx)("span", {
                            className: "italic",
                            children: (0, T.AP)(f),
                          }),
                          (0, n.jsx)(A.A, {
                            className: "h-5 w-5 fill-primary",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-8 text-center",
                        children: (0, n.jsxs)(l.P.button, {
                          type: "button",
                          animate: { y: [0, -3, 0] },
                          transition: {
                            duration: 2.2,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          whileTap: { scale: 0.97 },
                          onClick: () => {
                            var e;
                            null == (e = document.getElementById("wishes")) ||
                              e.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            " group cursor-pointer inline-flex items-center gap-2 text-sm text-primary transition-opacity duration-300 hover:opacity-80 ",
                          children: [
                            (0, n.jsx)(l.P.span, {
                              animate: { rotate: [-6, 6, -6] },
                              transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              children: "\uD83D\uDC8C",
                            }),
                            (0, n.jsx)("span", {
                              className:
                                " relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-primary/40  ",
                              children: "Xem những lời ch\xfac đ\xe3 gửi",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, n.jsxs)(l.P.form, {
                    noValidate: !0,
                    initial: { opacity: 0, y: 40 },
                    animate: _ ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8, delay: 0.2 },
                    onSubmit: B,
                    className: "rounded-2xl bg-card p-8 shadow-lg md:p-12",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "grid gap-6 md:grid-cols-2 text-muted-foreground",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "md:col-span-2",
                            children: [
                              (0, n.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                children: "Lời Ch\xfac \uD83D\uDC8C",
                              }),
                              (0, n.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, n.jsx)("textarea", {
                                    ref: I,
                                    name: "message",
                                    rows: 4,
                                    value: M.message,
                                    onChange: q,
                                    className: R + " resize-none",
                                    placeholder:
                                      "Viết v\xe0i lời ch\xfac thật dễ thương cho m\xecnh nh\xe9...",
                                    required: !0,
                                    onInvalid: (e) =>
                                      e.currentTarget.setCustomValidity(
                                        "".concat(
                                          (0, T.as)(g),
                                          " Bạn viết v\xe0i lời ch\xfac cho m\xecnh nh\xe9",
                                        ),
                                      ),
                                    onInput: (e) =>
                                      e.currentTarget.setCustomValidity(""),
                                  }),
                                  (0, n.jsx)("div", {
                                    ref: P,
                                    className:
                                      "absolute bottom-14 right-0 z-50",
                                    children:
                                      D &&
                                      (0, n.jsx)(ef.Ay, {
                                        onEmojiClick: (e) => {
                                          ((e) => {
                                            let t = I.current;
                                            if (!t) return;
                                            let a = t.selectionStart,
                                              n = t.selectionEnd,
                                              i = M.message,
                                              s =
                                                i.substring(0, a) +
                                                e +
                                                i.substring(n);
                                            (H({ ...M, message: s }),
                                              setTimeout(() => {
                                                (t.focus(),
                                                  (t.selectionStart =
                                                    t.selectionEnd =
                                                      a + e.length));
                                              }, 0));
                                          })(e.emoji);
                                        },
                                        theme: ef.Sx.LIGHT,
                                      }),
                                  }),
                                  (0, n.jsx)("button", {
                                    type: "button",
                                    onClick: () => V(!D),
                                    className:
                                      "absolute bottom-3 right-3 text-xl hover:scale-110 transition cursor-pointer",
                                    title: "Ch\xe8n biểu tượng",
                                    children: (0, n.jsx)(eb.A, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "md:col-span-2",
                            children: [
                              (0, n.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                children: "T\xean của bạn",
                              }),
                              (0, n.jsx)("input", {
                                name: "name",
                                required: !0,
                                value: M.name,
                                onChange: q,
                                className: R,
                                placeholder: "Nguyễn Văn Huy",
                                onInvalid: (e) =>
                                  e.currentTarget.setCustomValidity(
                                    "".concat(
                                      (0, T.as)(g),
                                      " Vui l\xf2ng điền t\xean của bạn nh\xe9",
                                    ),
                                  ),
                                onInput: (e) =>
                                  e.currentTarget.setCustomValidity(""),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "md:col-span-2",
                            children: [
                              (0, n.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                children: "Biệt danh",
                              }),
                              (0, n.jsx)("input", {
                                required: !0,
                                name: "nickname",
                                value: M.nickname,
                                onChange: q,
                                className: R,
                                placeholder:
                                  "VD: Bạn, \xd4ng b\xe0, C\xf4 ch\xfa, H\xe0ng x\xf3m ...",
                                onInvalid: (e) =>
                                  e.currentTarget.setCustomValidity(
                                    "".concat(
                                      (0, T.as)(g),
                                      " Bạn nhập gi\xfap m\xecnh biệt danh nh\xe9",
                                    ),
                                  ),
                                onInput: (e) =>
                                  e.currentTarget.setCustomValidity(""),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                children: "Bạn c\xf3 thể tham dự kh\xf4ng?",
                              }),
                              (0, n.jsxs)("select", {
                                name: "attending",
                                value: M.attending,
                                onChange: q,
                                className: R,
                                required: !0,
                                onInvalid: (e) =>
                                  e.currentTarget.setCustomValidity(
                                    "".concat(
                                      (0, T.as)(g),
                                      " Bạn cho tụi m\xecnh biết bạn c\xf3 thể tham dự kh\xf4ng nh\xe9",
                                    ),
                                  ),
                                onInput: (e) =>
                                  e.currentTarget.setCustomValidity(""),
                                children: [
                                  (0, n.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    children: "-- Chọn c\xe2u trả lời --",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "yes",
                                    children:
                                      "✨ Chắc chắn rồi, m\xecnh sẽ đến",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "maybe",
                                    children:
                                      "\uD83E\uDD0D M\xecnh sẽ cố gắng sắp xếp",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "no",
                                    children:
                                      "\uD83D\uDC8C Rất tiếc m\xecnh kh\xf4ng thể tham dự",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)("label", {
                                className: "mb-2 block text-sm font-medium",
                                children: "Số người tham dự",
                              }),
                              (0, n.jsxs)("select", {
                                name: "guests",
                                value: M.guests,
                                onChange: q,
                                className: ""
                                  .concat(R, " ")
                                  .concat(
                                    "yes" !== M.attending
                                      ? "opacity-60 cursor-not-allowed"
                                      : "",
                                  ),
                                disabled: "yes" !== M.attending,
                                required: "yes" === M.attending,
                                children: [
                                  (0, n.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    children: "-- Số người --",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "1",
                                    children: "1 người",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "2",
                                    children: "2 người",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "3",
                                    children: "3 người",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "4",
                                    children: "4 người",
                                  }),
                                  (0, n.jsx)("option", {
                                    value: "5",
                                    children: "5+ người",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)("button", {
                        type: "submit",
                        disabled: k,
                        className:
                          "\n    mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-medium transition text-sm\n    ".concat(
                            k
                              ? "bg-background/50 text-white cursor-not-allowed"
                              : "bg-background text-white hover:bg-muted hover:text-foreground",
                            "\n  ",
                          ),
                        children: k
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(l.P.div, {
                                  className:
                                    "h-4 w-4 rounded-full border-2 border-white border-t-transparent",
                                  animate: { rotate: 360 },
                                  transition: {
                                    repeat: 1 / 0,
                                    duration: 0.8,
                                    ease: "linear",
                                  },
                                }),
                                "ĐANG GỬI ...",
                              ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(ev.A, { className: "h-4 w-4" }),
                                "GỬI LỜI CH\xdaC",
                              ],
                            }),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      let ay = [
        {
          title: "Một đời",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-1_lwrauo.mp3",
          artist: "",
        },
        {
          title: "Ta l\xe0 của nhau",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-2_kb8xxi.mp3",
          artist: "",
        },
        {
          title: "Lễ đường",
          src: "https://res.cloudinary.com/dsdtqkkbm/video/upload/v1777629213/song-3_ypjmkf.mp3",
          artist: "",
        },
      ];
      function aN(e) {
        let { playlist: t, autoPlay: a } = e,
          s = (0, i.useRef)(null),
          [o, c] = (0, i.useState)(!1),
          [d, m] = (0, i.useState)(!1),
          [u, x] = (0, i.useState)(0),
          [h, p] = (0, i.useState)("0:00"),
          [g, v] = (0, i.useState)("0:00"),
          [f, b] = (0, i.useState)(0),
          [j, y] = (0, i.useState)(!1),
          N = (0, i.useRef)(null),
          w = t || ay,
          k = (0, i.useRef)(!1),
          C = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          if (a && N.current) {
            let e = N.current;
            ((e.volume = 0.7),
              e
                .play()
                .then(() => {
                  c(!0);
                })
                .catch(() => {
                  console.log("Autoplay bị chặn");
                }));
          }
        }, [a]);
        let T = (e) => {
          let t = Math.floor(e / 60),
            a = Math.floor(e % 60);
          return "".concat(t, ":").concat(a.toString().padStart(2, "0"));
        };
        (0, i.useEffect)(() => {
          let e = N.current;
          if (!e) return;
          let t = () => {
              e.duration &&
                (x((e.currentTime / e.duration) * 100), p(T(e.currentTime)));
            },
            a = () => {
              v(T(e.duration));
            },
            n = async () => {
              let e = N.current;
              e && (1 === w.length ? ((e.currentTime = 0), e.play()) : S());
            };
          return (
            e.addEventListener("timeupdate", t),
            e.addEventListener("loadedmetadata", a),
            e.addEventListener("ended", n),
            () => {
              (e.removeEventListener("timeupdate", t),
                e.removeEventListener("loadedmetadata", a),
                e.removeEventListener("ended", n));
            }
          );
        }, []);
        let P = async () => {
            let e = N.current;
            if (e)
              if (o) (e.pause(), (C.current = !0), c(!1));
              else
                try {
                  (await e.play(), c(!0));
                } catch (e) {
                  console.log("Play failed");
                }
          },
          S = () => {
            b((e) => (e + 1) % w.length);
          };
        return (
          (0, i.useEffect)(() => {
            (x(0), p("0:00"));
          }, [f]),
          (0, i.useEffect)(() => {
            let e = (e) => {
              s.current && !s.current.contains(e.target) && m(!1);
            };
            return (
              d && document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [d]),
          (0, i.useEffect)(() => {
            let e = async () => {
              if (k.current || C.current) return;
              k.current = !0;
              let e = N.current;
              if (e)
                try {
                  ((e.volume = 0.7), await e.play(), c(!0));
                } catch (e) {
                  console.log("Autoplay failed");
                }
            };
            return (
              document.addEventListener("pointerdown", e),
              () => {
                document.removeEventListener("pointerdown", e);
              }
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("audio", {
                ref: N,
                src: w[f].src,
                preload: "metadata",
                onLoadedMetadata: () => {
                  if (o) {
                    var e;
                    null == (e = N.current) || e.play();
                  }
                },
              }),
              (0, n.jsx)(l.P.div, {
                ref: s,
                initial: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.5, delay: 1 },
                className: "fixed right-4 bottom-6 z-50",
                children: (0, n.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, n.jsx)(r.N, {
                      children:
                        j &&
                        !d &&
                        (0, n.jsx)(l.P.div, {
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: 20 },
                          transition: {
                            opacity: { duration: 0.25 },
                            x: { duration: 0.25 },
                          },
                          className:
                            " relative px-3 py-1 rounded-[5px] bg-white backdrop-blur-md border border-white/20 text-primary text-sm shadow-md whitespace-nowrap  after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:w-2 after:h-2 after:rotate-45 after:bg-white after:border-r after:border-b after:border-white/20 ",
                          children: o
                            ? "Đang ph\xe1t nhạc \uD83C\uDFB5"
                            : "Bật nhạc \uD83C\uDFB6",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col items-end gap-2",
                      children: [
                        (0, n.jsx)(r.N, {
                          children:
                            d &&
                            (0, n.jsxs)(l.P.div, {
                              initial: { opacity: 0, y: 10, scale: 0.9 },
                              animate: { opacity: 1, y: 0, scale: 1 },
                              exit: { opacity: 0, y: 10, scale: 0.9 },
                              transition: { duration: 0.2 },
                              className:
                                "bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl p-4 shadow-xl w-64",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex items-center gap-3 mb-3",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5 text-foreground",
                                        fill: "var(--foreground)",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        (0, n.jsx)("p", {
                                          className:
                                            "font-serif text-sm text-foreground truncate",
                                          children: w[f].title,
                                        }),
                                        (0, n.jsx)("p", {
                                          className: "text-xs text-foreground",
                                          children: w[f].artist,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "h-1.5 bg-secondary rounded-full cursor-pointer mb-2 group",
                                  onClick: (e) => {
                                    let t = N.current;
                                    if (!t) return;
                                    let a =
                                      e.currentTarget.getBoundingClientRect();
                                    t.currentTime =
                                      ((e.clientX - a.left) / a.width) *
                                      t.duration;
                                  },
                                  children: (0, n.jsx)(l.P.div, {
                                    className:
                                      "h-full bg-primary rounded-full relative",
                                    style: { width: "".concat(u, "%") },
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                                    }),
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex justify-between text-xs text-foreground mb-3",
                                  children: [
                                    (0, n.jsx)("span", { children: h }),
                                    (0, n.jsx)("span", { children: g }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center justify-center gap-4",
                                  children: [
                                    (0, n.jsx)("button", {
                                      onClick: () => {
                                        b((e) =>
                                          0 === e ? w.length - 1 : e - 1,
                                        );
                                      },
                                      className:
                                        "p-2 text-foreground hover:text-foreground transition-colors cursor-pointer",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "var(--foreground)",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsx)("button", {
                                      onClick: P,
                                      className:
                                        "cursor-pointer w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg",
                                      children: o
                                        ? (0, n.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, n.jsx)("path", {
                                              d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
                                            }),
                                          })
                                        : (0, n.jsx)("svg", {
                                            className: "w-5 h-5 ml-0.5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, n.jsx)("path", {
                                              d: "M8 5v14l11-7z",
                                            }),
                                          }),
                                    }),
                                    (0, n.jsx)("button", {
                                      onClick: S,
                                      className:
                                        "p-2 text-foreground hover:text-foreground transition-colors cursor-pointer",
                                      children: (0, n.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "var(--foreground)",
                                        viewBox: "0 0 24 24",
                                        children: (0, n.jsx)("path", {
                                          d: "M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                        (0, n.jsx)(l.P.button, {
                          onMouseEnter: () => {
                            y(!0);
                          },
                          onMouseLeave: () => {
                            y(!1);
                          },
                          onClick: () => {
                            (m(!d), o || P());
                          },
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          className:
                            "cursor-pointer w-10 h-10 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ".concat(
                              o
                                ? "bg-primary text-primary-foreground"
                                : "bg-background/95 backdrop-blur-md border border-primary/20 text-primary",
                            ),
                          children: o
                            ? (0, n.jsx)("div", {
                                className: "relative",
                                children: (0, n.jsx)("div", {
                                  className: "flex items-end gap-0.5 h-5",
                                  children: [1, 2, 3, 4].map((e) =>
                                    (0, n.jsx)(
                                      l.P.div,
                                      {
                                        className:
                                          "w-1 bg-current rounded-full",
                                        animate: {
                                          height: ["8px", "20px", "8px"],
                                        },
                                        transition: {
                                          duration: 0.5,
                                          repeat: 1 / 0,
                                          delay: 0.1 * e,
                                        },
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              })
                            : (0, n.jsx)("svg", {
                                className: "w-6 h-6",
                                fill: "var(--foreground)",
                                viewBox: "0 0 24 24",
                                children: (0, n.jsx)("path", {
                                  d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
                                }),
                              }),
                        }),
                        !d &&
                          (0, n.jsx)(l.P.button, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            onClick: (e) => {
                              (e.stopPropagation(), P());
                            },
                            className:
                              "absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary/80 backdrop-blur-sm hidden items-center justify-center text-foreground hover:bg-secondary transition-colors shadow-md",
                            children: o
                              ? (0, n.jsx)("svg", {
                                  className: "w-4 h-4",
                                  fill: "var(--foreground)",
                                  viewBox: "0 0 24 24",
                                  children: (0, n.jsx)("path", {
                                    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
                                  }),
                                })
                              : (0, n.jsx)("svg", {
                                  className: "w-4 h-4 ml-0.5",
                                  fill: "var(--foreground)",
                                  viewBox: "0 0 24 24",
                                  children: (0, n.jsx)("path", {
                                    d: "M8 5v14l11-7z",
                                  }),
                                }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var aw = a(53264),
        ak = a.n(aw);
      let aC = [
        {
          bankName: "Vietcombank",
          accountNumber: "1234567890123",
          accountHolder: "NGUYEN ANH TUAN NGOC",
          qr: "/qr-groom.png",
        },
        {
          bankName: "Techcombank",
          accountNumber: "9876543210987",
          accountHolder: "NGUYEN THI THUY TRINH",
          qr: "/qr-bride.png",
        },
      ];
      function aT(e) {
        let { accounts: t, brideImage: a, groomImage: s, side: r } = e,
          o = (0, i.useRef)(null),
          c = (0, z.W)(o, { once: !0, margin: "-100px" }),
          d = (t || aC)
            .map((e, t) => ({ ...e, originalIndex: t }))
            .filter((e) => {
              var t, a, n, i;
              return (
                (null == (t = e.bankName) ? void 0 : t.trim()) ||
                (null == (a = e.accountNumber) ? void 0 : a.trim()) ||
                (null == (n = e.accountHolder) ? void 0 : n.trim()) ||
                (null == (i = e.qr) ? void 0 : i.trim())
              );
            });
        if (0 === d.length) return null;
        let u = "groom" === r ? [...d].reverse() : d,
          [x, h] = (0, i.useState)(null),
          [p, g] = (0, i.useState)(null);
        return (0, n.jsx)("section", {
          className: "py-20 md:py-32 bg-background",
          ref: o,
          id: "wedding-gift",
          children: (0, n.jsxs)("div", {
            className: "mx-auto max-w-4xl px-6",
            children: [
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 40 },
                animate: c ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8 },
                className: "mb-16 text-center",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10",
                    children: (0, n.jsx)(U.A, {
                      className: "h-8 w-8 text-primary",
                    }),
                  }),
                  (0, n.jsx)("h2", {
                    className: "".concat(
                      ak().className,
                      "\n              mt-2\n              text-[30px]\n              leading-none\n              text-foreground\n              md:text-[58px]\n              text-center\n              mb-6\n            ",
                    ),
                    children: "Hộp mừng sinh nhật",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "grid gap-6 ".concat(
                  1 === u.length
                    ? "grid-cols-1 place-items-center"
                    : "md:grid-cols-2",
                ),
                children: u.map((e, t) =>
                  (0, n.jsx)(
                    l.P.div,
                    {
                      initial: { opacity: 0, y: 40 },
                      animate: c ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.8, delay: 0.2 * t },
                      className: "perspective w-full max-w-md",
                      children: (0, n.jsxs)("div", {
                        onClick: () => {
                          h((e) => (e === t ? null : t));
                        },
                        className:
                          "relative h-[260px] w-full cursor-pointer transition-transform duration-700 transform-style preserve-3d ".concat(
                            x === t ? "rotate-y-180" : "",
                          ),
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "absolute inset-0 backface-hidden rounded-xl bg-card shadow-lg overflow-hidden",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center gap-4 border-b bg-muted/50 p-4",
                                children: [
                                  a &&
                                    (0, n.jsx)("div", {
                                      className:
                                        "relative h-12 w-12 overflow-hidden rounded-full border border-border",
                                      children: (0, n.jsx)(m.default, {
                                        src: 0 === e.originalIndex ? a : s,
                                        alt: "",
                                        fill: !0,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      }),
                                    }),
                                  (0, n.jsx)("div", {
                                    children: (0, n.jsx)("h3", {
                                      className:
                                        "font-medium text-muted-foreground",
                                      children: e.bankName,
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: "p-6",
                                children: [
                                  (0, n.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Số t\xe0i khoản",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, n.jsx)("p", {
                                        className:
                                          "text-muted-foreground text-lg font-medium",
                                        children: e.accountNumber,
                                      }),
                                      (0, n.jsx)("button", {
                                        onClick: (a) => {
                                          var n;
                                          (a.stopPropagation(),
                                            (n = e.accountNumber),
                                            navigator.clipboard.writeText(n),
                                            g(t),
                                            setTimeout(() => g(null), 2e3));
                                        },
                                        className:
                                          "flex h-8 w-8 items-center justify-center rounded-lg bg-muted hover:bg-muted/80",
                                        children:
                                          p === t
                                            ? (0, n.jsx)(ex.A, {
                                                className:
                                                  "h-4 w-4 text-green-600",
                                              })
                                            : (0, n.jsx)(eh.A, {
                                                className:
                                                  "h-4 w-4 text-muted-foreground",
                                              }),
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "mt-4 text-sm text-muted-foreground",
                                    children: "Chủ t\xe0i khoản",
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "font-medium text-muted-foreground",
                                    children: e.accountHolder,
                                  }),
                                  (0, n.jsx)(l.P.p, {
                                    animate: {
                                      y: [0, -4, 0],
                                      scale: [1, 1.06, 1],
                                    },
                                    transition: {
                                      duration: 1.5,
                                      repeat: 1 / 0,
                                      ease: "easeInOut",
                                    },
                                    className:
                                      "mt-4 text-xs font-semibold text-primary",
                                    children:
                                      "\uD83D\uDC46 Chạm để xem m\xe3 QR",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "absolute inset-0 rotate-y-180 backface-hidden rounded-xl bg-card shadow-lg flex flex-col items-center justify-center p-6",
                            children: [
                              (0, n.jsx)("p", {
                                className: "mb-4 text-sm text-muted-foreground",
                                children: "Qu\xe9t m\xe3 để mừng cưới",
                              }),
                              (0, n.jsx)(m.default, {
                                src: e.qr,
                                alt: "QR Code",
                                width: 160,
                                height: 160,
                                className: "rounded-lg border bg-white p-2",
                                unoptimized: !0,
                              }),
                              (0, n.jsx)("p", {
                                className: "mt-4 text-xs text-muted-foreground",
                                children: "\uD83D\uDC46 Chạm để quay lại",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.accountNumber,
                  ),
                ),
              }),
              (0, n.jsxs)(l.P.div, {
                initial: { opacity: 0, y: 20 },
                "text-muted-foreground": !0,
                animate: c ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.8, delay: 0.6 },
                className:
                  "mt-12 flex items-center justify-center gap-2 text-foreground",
                children: [
                  (0, n.jsx)(A.A, {
                    className: "h-4 w-4 fill-primary text-primary",
                  }),
                  (0, n.jsx)("span", {
                    children:
                      "Cảm ơn bạn đ\xe3 d\xe0nh những lời ch\xfac v\xe0 m\xf3n qu\xe0 \xfd nghĩa!",
                  }),
                  (0, n.jsx)(A.A, {
                    className: "h-4 w-4 fill-primary text-primary",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var aP = a(868),
        aS = a.n(aP),
        aI = a(90698),
        az = a.n(aI);
      function aD(e) {
        let { content: t, signature: a } = e;
        return (null == t ? void 0 : t.trim())
          ? (0, n.jsxs)(l.P.div, {
              initial: { opacity: 0, y: 60 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.2 },
              transition: { duration: 1, ease: "easeOut" },
              className: "px-6 text-center mt-6 mb-10",
              children: [
                (0, n.jsx)("p", {
                  className: "".concat(
                    aS().className,
                    " text-3xl text-secondary mb-3",
                  ),
                  children: "Giới thiệu",
                }),
                (0, n.jsx)("p", {
                  className: "".concat(
                    az().className,
                    " text-base text-gray-700 leading-relaxed font-medium",
                  ),
                  children: t,
                }),
                (0, n.jsxs)("div", {
                  className: "mt-6 flex items-center justify-center",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "flex-1 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70",
                    }),
                    (0, n.jsx)("p", {
                      className: "".concat(
                        aS().className,
                        " text-xl text-secondary mx-4 whitespace-nowrap",
                      ),
                      children: a,
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "flex-1 h-[1px] bg-gradient-to-l from-transparent via-secondary to-transparent opacity-70",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var aV = a(20172),
        a_ = a.n(aV);
      function aA(e) {
        let {
            youtubeUrl: t = "https://www.youtube.com/embed/dQw4w9WgXcQ",
            title: a = "Lời Nhắn Gửi",
            description:
              s = "Ch\xfang t\xf4i muốn gửi đến c\xe1c bạn những lời y\xeau thương v\xe0 cảm ơn ch\xe2n th\xe0nh nhất. Xin h\xe3y c\xf9ng xem video n\xe0y để hiểu th\xeam về h\xe0nh tr\xecnh t\xecnh y\xeau của ch\xfang t\xf4i.",
          } = e,
          [r, o] = (0, i.useState)(!1);
        return t && "" !== t.trim()
          ? (0, n.jsxs)("section", {
              className:
                "py-10 md:py-28 bg-foreground text-background relative overflow-hidden",
              children: [
                (0, n.jsxs)("div", {
                  className: "absolute inset-0 opacity-5",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-10 left-10 w-64 h-64 border border-current rounded-full",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute bottom-10 right-10 w-96 h-96 border border-current rounded-full",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "container mx-auto px-4 relative z-10",
                  children: [
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6 },
                      className: "text-center mb-12",
                      children: [
                        (0, n.jsx)(l.P.div, {
                          initial: { scale: 0 },
                          whileInView: { scale: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.2 },
                          className:
                            "inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 mb-6",
                          children: (0, n.jsx)("svg", {
                            className: "w-8 h-8",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                              d: "M8 5v14l11-7z",
                            }),
                          }),
                        }),
                        (0, n.jsx)("h2", {
                          className: "".concat(
                            a_().className,
                            "text-3xl md:text-5xl",
                          ),
                          children: a,
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-background/70 max-w-2xl mx-auto leading-relaxed",
                          children: s,
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.P.div, {
                      initial: { opacity: 0, scale: 0.95 },
                      whileInView: { opacity: 1, scale: 1 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6, delay: 0.3 },
                      className: "max-w-4xl mx-auto",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/20",
                          children: [
                            !r &&
                              (0, n.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center bg-background/5",
                                children: (0, n.jsxs)("div", {
                                  className: "flex flex-col items-center gap-4",
                                  children: [
                                    (0, n.jsx)(l.P.div, {
                                      animate: { rotate: 360 },
                                      transition: {
                                        duration: 1,
                                        repeat: 1 / 0,
                                        ease: "linear",
                                      },
                                      className:
                                        "w-10 h-10 border-2 border-background/30 border-t-background rounded-full",
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "text-sm text-background/50",
                                      children: "Đang tải video...",
                                    }),
                                  ],
                                }),
                              }),
                            (0, n.jsx)("iframe", {
                              src: t,
                              title: "Wedding Video",
                              allow:
                                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowFullScreen: !0,
                              onLoad: () => o(!0),
                              className:
                                "absolute inset-0 w-full h-full transition-opacity duration-500 ".concat(
                                  r ? "opacity-100" : "opacity-0",
                                ),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute inset-0 pointer-events-none border border-background/10 rounded-2xl",
                            }),
                          ],
                        }),
                        (0, n.jsx)(l.P.p, {
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.5 },
                          className:
                            "text-center mt-6 text-secondary text-sm italic",
                          children:
                            "“T\xecnh y\xeau kh\xf4ng phải l\xe0 nh\xecn nhau, m\xe0 l\xe0 c\xf9ng nhau nh\xecn về một hướng”",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex justify-center gap-2 mt-10",
                      children: [void 0, void 0, void 0].map((e, t) =>
                        (0, n.jsx)(
                          l.P.svg,
                          {
                            initial: { opacity: 0, scale: 0 },
                            whileInView: { opacity: 1, scale: 1 },
                            viewport: { once: !0 },
                            transition: { duration: 0.3, delay: 0.6 + 0.1 * t },
                            className: "w-4 h-4 text-background/30",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, n.jsx)("path", {
                              d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      var aE = a(82670),
        aL = a.n(aE);
      let aM = [
        {
          time: "09:00",
          title: "Lễ Vu Quy",
          location: "Nh\xe0 G\xe1i - Quận Ba Đ\xecnh, H\xe0 Nội",
          description: "Nghi lễ truyền thống tại gia đ\xecnh nh\xe0 g\xe1i",
          icon: "\uD83D\uDC92",
        },
        {
          time: "11:00",
          title: "Lễ Th\xe0nh H\xf4n",
          location: "Nh\xe0 Trai - Quận Cầu Giấy, H\xe0 Nội",
          description: "Nghi lễ rước d\xe2u v\xe0 lễ cưới ch\xednh thức",
          icon: "\uD83D\uDC92",
        },
        {
          time: "12:00",
          title: "Tiệc Cưới",
          location: "Trung T\xe2m Tiệc Cưới White Palace",
          description: "Tiệc mừng c\xf9ng gia đ\xecnh v\xe0 bạn b\xe8",
          icon: "\uD83C\uDF7D️",
        },
        {
          time: "18:00",
          title: "Tiệc Tối & \xc2m Nhạc",
          location: "Trung T\xe2m Tiệc Cưới White Palace",
          description: "Gala dinner với chương tr\xecnh văn nghệ đặc sắc",
          icon: "\uD83C\uDFB6",
        },
      ];
      function aH(e) {
        let { events: t } = e,
          a = (0, i.useRef)(null),
          s = (0, z.W)(a, { once: !0, margin: "-100px" }),
          r = (null != t ? t : aM).filter((e) => {
            var t, a, n, i;
            return (
              (null == (t = e.title) ? void 0 : t.trim()) ||
              (null == (a = e.time) ? void 0 : a.trim()) ||
              (null == (n = e.location) ? void 0 : n.trim()) ||
              (null == (i = e.description) ? void 0 : i.trim())
            );
          });
        return 0 === r.length
          ? null
          : (0, n.jsx)("section", {
              className: "py-10 md:py-20",
              ref: a,
              children: (0, n.jsxs)("div", {
                className: "mx-auto max-w-4xl px-6",
                children: [
                  (0, n.jsx)(l.P.div, {
                    initial: { opacity: 0, y: 40 },
                    animate: s ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.8 },
                    className: "mb-16 text-center",
                    children: (0, n.jsx)("p", {
                      className: "".concat(
                        aL().className,
                        " text-3xl text-secondary mb-3",
                      ),
                      children: "Timeline",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2",
                      }),
                      r.map((e, t) =>
                        (0, n.jsx)(
                          l.P.div,
                          {
                            initial: { opacity: 0, y: 30, scale: 0.95 },
                            whileInView: { opacity: 1, y: 0, scale: 1 },
                            viewport: { once: !0, amount: 0.25 },
                            transition: { duration: 0.7 },
                            className: "relative mb-5 last:mb-0 ".concat(
                              t % 2 == 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto",
                            ),
                            children: (0, n.jsxs)("div", {
                              className: "flex items-start gap-6 ".concat(
                                t % 2 == 0
                                  ? "md:flex-row"
                                  : "md:flex-row-reverse",
                              ),
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-primary-foreground shadow-lg text-xl",
                                  children: e.icon,
                                }),
                                (0, n.jsxs)(l.P.div, {
                                  whileHover: { scale: 1.02 },
                                  className:
                                    "flex-1 rounded-lg bg-card p-4 shadow-sm transition-shadow hover:shadow-md ".concat(
                                      t % 2 == 0
                                        ? "md:text-right"
                                        : "md:text-left",
                                    ),
                                  children: [
                                    e.time &&
                                      (0, n.jsx)("span", {
                                        className:
                                          "mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-gray-700",
                                        children: e.time,
                                      }),
                                    (0, n.jsx)("h3", {
                                      className:
                                        "mb-2 font-serif md:text-xl text-base text-gray-700",
                                      children: e.title,
                                    }),
                                    (0, n.jsx)("p", {
                                      className:
                                        "mb-1 text-sm font-medium text-muted-foreground",
                                      children: e.location,
                                    }),
                                    (0, n.jsx)("p", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            });
      }
      function aB(e) {
        var t,
          a,
          s,
          r,
          o,
          c,
          d,
          m,
          u,
          x,
          h,
          p,
          g,
          v,
          f,
          b,
          j,
          y,
          N,
          w,
          k,
          C,
          T,
          P,
          S,
          I,
          z,
          D,
          V,
          _,
          A,
          E,
          L,
          M,
          H,
          B,
          q,
          F,
          R,
          W,
          G,
          O,
          Q,
          U,
          Y,
          K,
          X;
        let { data: Z, guestName: $, showDoorAnimation: J = !0 } = e,
          [ee, et] = (0, i.useState)(!1),
          [ea, en] = (0, i.useState)(0),
          [ei, es] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = setTimeout(() => {
              (et(!0), es(!0));
            }, 1200);
            return () => clearTimeout(e);
          }, []),
          (0, n.jsxs)("div", {
            className:
              "mx-auto relative md:w-[50%] h-screen  max-h-screen bg-foreground shadow-2xl overflow-hidden flex items-center justify-center",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "absolute inset-0 z-0 overflow-y-auto overflow-x-hidden bg-foreground",
                children: [
                  (0, n.jsx)(tZ, {
                    guestName: $,
                    data: Z.hero,
                    groomName:
                      null == (a = Z.couple) || null == (t = a.groom)
                        ? void 0
                        : t.name,
                    brideName:
                      null == (r = Z.couple) || null == (s = r.bride)
                        ? void 0
                        : s.name,
                    side: Z.side,
                  }),
                  (0, n.jsx)(t0, {
                    weddingDate: null == (o = Z.hero) ? void 0 : o.date,
                    image: null == (c = Z.story) ? void 0 : c.image,
                    brideWeddingDate: null == (d = Z.hero) ? void 0 : d.date,
                    groomWeddingDate: null == (m = Z.hero) ? void 0 : m.date2,
                  }),
                  (0, n.jsx)(aD, {
                    content:
                      (null == (x = Z.story.content) ||
                      null ==
                        (u = x.find((e) => {
                          var t;
                          return null == (t = e.desc) ? void 0 : t.trim();
                        }))
                        ? void 0
                        : u.desc) || "",
                    signature: "".concat(Z.couple.bride.name),
                  }),
                  (0, n.jsx)(t7, {
                    venues: Z.venues,
                    dressColors: Z.dressColors,
                    weddingId: Z.id,
                  }),
                  (0, n.jsx)(aH, {
                    events: Z.events,
                    weddingDate: null == (h = Z.hero) ? void 0 : h.date,
                  }),
                  (0, n.jsx)(as, {
                    images: Z.gallery,
                    lang: Z.lang,
                    title: null == (p = Z.gallery) ? void 0 : p.title,
                  }),
                  (0, n.jsx)(aA, {
                    youtubeUrl: null == (g = Z.video) ? void 0 : g.url,
                    title: null == (v = Z.video) ? void 0 : v.title,
                    description: null == (f = Z.video) ? void 0 : f.desc,
                  }),
                  (null == (b = Z.features) ? void 0 : b.showWishes) !== !1 &&
                    (0, n.jsx)(av, {
                      refreshKey: ea,
                      weddingId: Z.id,
                      coverImage:
                        null == (j = Z.wishes) ? void 0 : j.coverImage,
                    }),
                  (0, n.jsx)(aj, {
                    weddingId: Z.id,
                    theme: Z.theme,
                    onSuccess: () => en((e) => e + 1),
                    people:
                      "groom" === Z.side
                        ? [
                            {
                              value: "groom",
                              label: "Ch\xfa rể",
                              img:
                                null == (N = Z.couple) || null == (y = N.groom)
                                  ? void 0
                                  : y.image,
                            },
                            {
                              value: "bride",
                              label: "C\xf4 d\xe2u",
                              img:
                                null == (k = Z.couple) || null == (w = k.bride)
                                  ? void 0
                                  : w.image,
                            },
                            {
                              value: "both",
                              label: "Cả hai",
                              img: null == (C = Z.story) ? void 0 : C.image,
                            },
                          ]
                        : [
                            {
                              value: "bride",
                              label: "C\xf4 d\xe2u",
                              img:
                                null == (P = Z.couple) || null == (T = P.bride)
                                  ? void 0
                                  : T.image,
                            },
                            {
                              value: "groom",
                              label: "Ch\xfa rể",
                              img:
                                null == (I = Z.couple) || null == (S = I.groom)
                                  ? void 0
                                  : S.image,
                            },
                            {
                              value: "both",
                              label: "Cả hai",
                              img: null == (z = Z.story) ? void 0 : z.image,
                            },
                          ],
                    brideName:
                      null == (V = Z.couple) || null == (D = V.bride)
                        ? void 0
                        : D.name,
                    groomName:
                      null == (A = Z.couple) || null == (_ = A.groom)
                        ? void 0
                        : _.name,
                    thankYouImage:
                      null !=
                      (X = null == (E = Z.thankyou) ? void 0 : E.coverImage)
                        ? X
                        : "",
                    features: Z.features,
                  }),
                  (0, n.jsx)(aT, {
                    accounts: Z.bankAccounts,
                    brideImage:
                      null == (M = Z.couple) || null == (L = M.bride)
                        ? void 0
                        : L.image,
                    groomImage:
                      null == (B = Z.couple) || null == (H = B.groom)
                        ? void 0
                        : H.image,
                    side: Z.side,
                  }),
                  (0, n.jsx)(ao, {
                    weddingDate:
                      (null == (q = Z.hero) ? void 0 : q.date2) &&
                      (null == (F = Z.countdown) ? void 0 : F.useFirstDate) ===
                        !1
                        ? Z.hero.date2
                        : null == (R = Z.hero)
                          ? void 0
                          : R.date,
                  }),
                  (0, n.jsx)(ax, {
                    brideName:
                      null == (G = Z.couple) || null == (W = G.bride)
                        ? void 0
                        : W.name,
                    groomName:
                      null == (Q = Z.couple) || null == (O = Q.groom)
                        ? void 0
                        : O.name,
                    theme: Z.theme,
                    image: null == (U = Z.thankyou) ? void 0 : U.coverImage,
                    side: Z.side,
                    title: null == (Y = Z.thankyou) ? void 0 : Y.title,
                    description:
                      null == (K = Z.thankyou) ? void 0 : K.description,
                  }),
                  (0, n.jsx)(aN, { playlist: Z.playlist, autoPlay: ei }),
                ],
              }),
              J &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)(l.P.div, {
                      initial: { x: 0 },
                      animate: { x: ee ? "-100%" : 0 },
                      transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
                      className:
                        "absolute top-0 left-0 w-1/2 h-full bg-background z-10 border-r border-white/20 overflow-hidden pointer-events-none",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-[200%] h-[80px] bg-[url('/path-to-lanterns.png')] bg-contain bg-repeat-x",
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-[45%] right-0 translate-x-1/2 -translate-y-1/2 w-[200%] max-w-[300px] aspect-square flex items-center justify-center",
                          children: (0, n.jsx)("div", {
                            className:
                              "w-full h-full text-foreground text-[100px] font-bold flex items-center justify-center",
                            children: "\uD83C\uDF82",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(l.P.div, {
                      initial: { x: 0 },
                      animate: { x: ee ? "100%" : 0 },
                      transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
                      className:
                        "absolute top-0 right-0 w-1/2 h-full bg-background z-10 border-l border-white/20 overflow-hidden pointer-events-none",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 right-0 w-[200%] h-[80px] bg-[url('/path-to-lanterns.png')] bg-contain bg-repeat-x scale-x-[-1]",
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-[45%] left-0 -translate-x-1/2 -translate-y-1/2 w-[200%] max-w-[300px] aspect-square flex items-center justify-center",
                          children: (0, n.jsx)("div", {
                            className:
                              "w-full h-full text-foreground text-[100px] font-bold flex items-center justify-center",
                            children: "\uD83C\uDF82",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        );
      }
      let aq = (0, tB.default)(
          () =>
            a
              .e(213)
              .then(a.bind(a, 20213))
              .then((e) => e.Gallery),
          {
            loadableGenerated: { webpack: () => [20213] },
            ssr: !1,
            loading: () =>
              (0, n.jsx)("div", {
                className: "py-20 text-center",
                children: "Đang tải album ảnh...",
              }),
          },
        ),
        aF = (e) => {
          if (!e) return "";
          let t = (0, T.Zj)(e);
          if (isNaN(t.getTime())) return e;
          let a = String(t.getDate()).padStart(2, "0"),
            n = String(t.getMonth() + 1).padStart(2, "0"),
            i = t.getFullYear();
          return "".concat(a, ".").concat(n, ".").concat(i);
        };
      function aR(e) {
        var t,
          a,
          l,
          r,
          o,
          c,
          m,
          u,
          x,
          h,
          p,
          g,
          v,
          f,
          b,
          j,
          N,
          w,
          k,
          T,
          P,
          S,
          z,
          D,
          V,
          A,
          E,
          M,
          H,
          B,
          F,
          R,
          W,
          G,
          O,
          Q,
          U,
          Y,
          K,
          X,
          Z,
          $,
          J,
          ee,
          ea,
          en,
          ei,
          es,
          el,
          ed,
          em,
          ex,
          eh,
          ep,
          ev,
          ef,
          eb,
          eN,
          eT,
          eP,
          eI,
          ez,
          eD,
          eV,
          e_,
          eA,
          eE,
          eL,
          eM,
          eH,
          eB,
          eq,
          eF,
          eR,
          eW,
          eG,
          eO,
          eQ,
          eU,
          eY,
          eK,
          eX,
          eZ,
          e$,
          eJ,
          e0,
          e1,
          e2,
          e4,
          e5,
          e3,
          e6,
          e8,
          e7,
          e9,
          te,
          tt,
          ta,
          tn,
          ti,
          ts,
          tl,
          tr,
          to,
          tc,
          td,
          tm,
          tu,
          tx,
          th,
          tp,
          tg,
          tv,
          tf,
          tb,
          tj;
        let { initialData: ty } = e,
          tN = (0, s.useParams)(),
          tw = (0, s.useSearchParams)();
        tN.slug;
        let tk = tw.has("guest"),
          tC = null != (eQ = tw.get("guest")) ? eQ : "",
          tT = tw.get("view"),
          [tP, tS] = (0, i.useState)(ty),
          [tI, tz] = (0, i.useState)(!1),
          [tD, tV] = (0, i.useState)(!1),
          [t_, tA] = (0, i.useState)(!1),
          [tE, tL] = (0, i.useState)(!1),
          [tM, tB] = (0, i.useState)(0),
          tq =
            null !=
            (eU = null == tP || null == (t = tP.features) ? void 0 : t.lang)
              ? eU
              : "vi";
        if (
          ((0, i.useEffect)(() => {
            tk && !t_ && tV(!0);
          }, [tk, t_]),
          (0, i.useEffect)(() => {
            (null == tP ? void 0 : tP.theme) &&
              (document.documentElement.dataset.theme = tP.theme);
          }, [tP]),
          tI)
        )
          return (0, n.jsxs)("div", {
            className:
              "min-h-screen flex flex-col items-center justify-center bg-cream",
            children: [
              (0, n.jsx)("div", {
                className: "animate-pulse text-[#c9a227] text-3xl",
                children: "\uD83D\uDC9B",
              }),
              (0, n.jsxs)("p", {
                className: "mt-4 text-sm text-muted-foreground",
                children: [
                  (0, n.jsx)("span", {
                    className: "block text-sm font-medium text-foreground",
                    children: "Đang chuẩn bị thiệp mời cho bạn...",
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "mt-1 block text-xs italic tracking-wide text-muted-foreground",
                    children: "Preparing your invitation...",
                  }),
                ],
              }),
            ],
          });
        if (!tP)
          return (0, n.jsx)("div", {
            className: "min-h-screen flex items-center justify-center",
            children: (0, n.jsxs)("p", {
              className: "text-muted-foreground",
              children: [
                (0, n.jsx)("span", {
                  className: "block text-base font-medium text-foreground",
                  children: "Kh\xf4ng t\xecm thấy dữ liệu",
                }),
                (0, n.jsx)("span", {
                  className: "mt-1 block text-sm italic text-muted-foreground",
                  children: "Data not found",
                }),
              ],
            }),
          });
        let tF =
            null !=
              (eY =
                null == (a = tP.bankAccounts)
                  ? void 0
                  : a.some((e) => {
                      var t, a, n, i;
                      return (
                        (null == (t = e.bankName) ? void 0 : t.trim()) ||
                        (null == (a = e.accountNumber) ? void 0 : a.trim()) ||
                        (null == (n = e.accountHolder) ? void 0 : n.trim()) ||
                        (null == (i = e.qr) ? void 0 : i.trim())
                      );
                    })) && eY,
          tW =
            (null != (eK = null == (l = tP.bridesmaids) ? void 0 : l.length)
              ? eK
              : 0) > 0 ||
            (null != (eX = null == (r = tP.groomsmen) ? void 0 : r.length)
              ? eX
              : 0) > 0,
          tG = null == (o = tP.page) ? void 0 : o.order,
          tO = (null == tG ? void 0 : tG.length)
            ? tG
            : [
                "hero",
                "calendar",
                "story",
                "couple",
                "location",
                "timeline",
                "gallery",
                "video",
                "wishes",
                "rsvp",
                "gift",
                "countdown",
                "thankyou",
              ];
        if (tD && (1 === tP.version || 3 === tP.version))
          return (0, n.jsx)(y, {
            guestName: tC,
            onOpen: () => {
              (tk && sessionStorage.setItem("invitation_".concat(tC), "true"),
                tV(!1),
                tA(!0),
                tL(!0));
            },
            weddingDate: aF(null == (eZ = tP.hero) ? void 0 : eZ.date),
            brideName:
              null == (eJ = tP.couple) || null == (e$ = eJ.bride)
                ? void 0
                : e$.name,
            groomName:
              null == (e1 = tP.couple) || null == (e0 = e1.groom)
                ? void 0
                : e0.name,
            theme: tP.theme,
            side: tP.side,
            slug: tP.slug,
            lunarDate: null == (e2 = tP.hero) ? void 0 : e2.lunarDate,
            brideWeddingDate: aF(null == (e4 = tP.hero) ? void 0 : e4.date),
            groomWeddingDate: aF(null == (e5 = tP.hero) ? void 0 : e5.date2),
            groomShortName:
              null == (e6 = tP.couple) || null == (e3 = e6.groom)
                ? void 0
                : e3.shortName,
            brideShortName:
              null == (e7 = tP.couple) || null == (e8 = e7.bride)
                ? void 0
                : e8.shortName,
            weddingId: tP.id,
            lang: tq,
            cover:
              null != (te = null == (e9 = tP.features) ? void 0 : e9.cover)
                ? te
                : "cover-1",
          });
        let tQ = {
          navigation: (0, n.jsx)(C, {
            brideName:
              null == (m = tP.couple) || null == (c = m.bride)
                ? void 0
                : c.name,
            groomName:
              null == (x = tP.couple) || null == (u = x.groom)
                ? void 0
                : u.name,
            side: tP.side,
            lang: tq,
            customLogo: null == (h = tP.features) ? void 0 : h.customLogo,
          }),
          hero: (0, n.jsx)(I, {
            data: tP.hero,
            groomName:
              null == (g = tP.couple) || null == (p = g.groom)
                ? void 0
                : p.name,
            brideName:
              null == (f = tP.couple) || null == (v = f.bride)
                ? void 0
                : v.name,
            side: tP.side,
            brideWeddingDate: aF(null == (b = tP.hero) ? void 0 : b.date),
            groomWeddingDate: aF(null == (j = tP.hero) ? void 0 : j.date2),
            groomShortName:
              null == (w = tP.couple) || null == (N = w.groom)
                ? void 0
                : N.shortName,
            brideShortName:
              null == (T = tP.couple) || null == (k = T.bride)
                ? void 0
                : k.shortName,
            nameLayout: null == (P = tP.hero) ? void 0 : P.nameLayout,
            lang: tq,
          }),
          calendar: (0, n.jsx)(ek, {
            weddingDate: null == (S = tP.hero) ? void 0 : S.date,
            brideWeddingDate: null == (z = tP.hero) ? void 0 : z.date,
            groomWeddingDate: null == (D = tP.hero) ? void 0 : D.date2,
            lang: tq,
          }),
          story: (0, n.jsx)(_, {
            data: tP.story,
            brideName:
              null == (A = tP.couple) || null == (V = A.bride)
                ? void 0
                : V.name,
            groomName:
              null == (M = tP.couple) || null == (E = M.groom)
                ? void 0
                : E.name,
            side: tP.side,
            weddingId: tP.id,
            lang: tq,
            groomShortName:
              null == (B = tP.couple) || null == (H = B.groom)
                ? void 0
                : H.shortName,
            brideShortName:
              null == (R = tP.couple) || null == (F = R.bride)
                ? void 0
                : F.shortName,
          }),
          couple: (0, n.jsx)(L, {
            data: tP.couple,
            side: tP.side,
            weddingId: tP.id,
            lang: tq,
          }),
          location: (0, n.jsx)(er, {
            venues: tP.venues,
            dressColors: tP.dressColors,
            lang: tq,
            dressCodeDescription: tP.dressCodeDescription,
          }),
          timeline: (0, n.jsx)(et, {
            events: tP.events,
            weddingDate: null == (W = tP.hero) ? void 0 : W.date,
            lang: tq,
          }),
          gallery: (0, n.jsx)(aq, {
            images: tP.gallery,
            lang: tq,
            title: null == (G = tP.gallery) ? void 0 : G.title,
          }),
          video: (0, n.jsx)(eo, {
            youtubeUrl: null == (O = tP.video) ? void 0 : O.url,
            title: null == (Q = tP.video) ? void 0 : Q.title,
            description: null == (U = tP.video) ? void 0 : U.desc,
            lang: tq,
          }),
          wishes:
            (null == (Y = tP.features) ? void 0 : Y.showWishes) !== !1 &&
            (0, n.jsx)(eu, {
              refreshKey: tM,
              weddingId: tP.id,
              coverImage: null == (K = tP.wishes) ? void 0 : K.coverImage,
              lang: tq,
            }),
          rsvp:
            (null == (X = tP.features) ? void 0 : X.showRSVP) !== !1 &&
            (0, n.jsx)(ej, {
              lang: tq,
              weddingId: tP.id,
              theme: tP.theme,
              onSuccess: () => tB((e) => e + 1),
              people:
                "groom" === tP.side
                  ? [
                      {
                        value: "groom",
                        label: d.w.people.groom[tq],
                        img:
                          null == ($ = tP.couple) || null == (Z = $.groom)
                            ? void 0
                            : Z.image,
                      },
                      {
                        value: "bride",
                        label: d.w.people.bride[tq],
                        img:
                          null == (ee = tP.couple) || null == (J = ee.bride)
                            ? void 0
                            : J.image,
                      },
                      {
                        value: "both",
                        label: d.w.people.both[tq],
                        img: null == (ea = tP.story) ? void 0 : ea.image,
                      },
                    ]
                  : [
                      {
                        value: "bride",
                        label: d.w.people.bride[tq],
                        img:
                          null == (ei = tP.couple) || null == (en = ei.bride)
                            ? void 0
                            : en.image,
                      },
                      {
                        value: "groom",
                        label: d.w.people.groom[tq],
                        img:
                          null == (el = tP.couple) || null == (es = el.groom)
                            ? void 0
                            : es.image,
                      },
                      {
                        value: "both",
                        label: d.w.people.both[tq],
                        img: null == (ed = tP.story) ? void 0 : ed.image,
                      },
                    ],
              brideName:
                null == (ex = tP.couple) || null == (em = ex.bride)
                  ? void 0
                  : em.name,
              groomName:
                null == (ep = tP.couple) || null == (eh = ep.groom)
                  ? void 0
                  : eh.name,
              thankYouImage:
                null !=
                (tt = null == (ev = tP.thankyou) ? void 0 : ev.coverImage)
                  ? tt
                  : "",
              side: tP.side,
              wishesFirstInForm:
                null == (ef = tP.features) ? void 0 : ef.wishesFirstInForm,
              features: tP.features,
            }),
          gift:
            "social" !== tT &&
            (0, n.jsx)(eg, {
              accounts: tP.bankAccounts,
              brideImage:
                null == (eN = tP.couple) || null == (eb = eN.bride)
                  ? void 0
                  : eb.image,
              groomImage:
                null == (eP = tP.couple) || null == (eT = eP.groom)
                  ? void 0
                  : eT.image,
              side: tP.side,
              lang: tq,
            }),
          countdown: (0, n.jsx)(ec, {
            weddingDate: null == (eI = tP.hero) ? void 0 : eI.date,
            city: null == (ez = tP.hero) ? void 0 : ez.city,
            countdownImage:
              null == (eD = tP.countdown) ? void 0 : eD.coverImage,
            showSeconds: null == (eV = tP.countdown) ? void 0 : eV.showSeconds,
            brideWeddingDate: null == (e_ = tP.hero) ? void 0 : e_.date,
            groomWeddingDate: null == (eA = tP.hero) ? void 0 : eA.date2,
            lang: tq,
          }),
          thankyou: (0, n.jsx)(eC, {
            brideName:
              null == (eL = tP.couple) || null == (eE = eL.bride)
                ? void 0
                : eE.name,
            groomName:
              null == (eH = tP.couple) || null == (eM = eH.groom)
                ? void 0
                : eM.name,
            theme: tP.theme,
            image: null == (eB = tP.thankyou) ? void 0 : eB.coverImage,
            side: tP.side,
            title: null == (eq = tP.thankyou) ? void 0 : eq.title,
            description: null == (eF = tP.thankyou) ? void 0 : eF.description,
            groomShortName:
              null == (eW = tP.couple) || null == (eR = eW.groom)
                ? void 0
                : eR.shortName,
            brideShortName:
              null == (eO = tP.couple) || null == (eG = eO.bride)
                ? void 0
                : eG.shortName,
          }),
        };
        if (1 === tP.version)
          return (0, n.jsxs)("main", {
            className: "min-h-screen",
            children: [
              (0, n.jsx)(C, {
                brideName:
                  null == (tn = tP.couple) || null == (ta = tn.bride)
                    ? void 0
                    : ta.name,
                groomName:
                  null == (ts = tP.couple) || null == (ti = ts.groom)
                    ? void 0
                    : ti.name,
                side: tP.side,
                lang: tq,
                customLogo: null == (tl = tP.features) ? void 0 : tl.customLogo,
              }),
              tO.map((e) => {
                let t = tQ[e];
                return t ? (0, n.jsx)(i.Fragment, { children: t }, e) : null;
              }),
              (0, n.jsx)(q, {
                bridesmaids: null != (tb = tP.bridesmaids) ? tb : [],
                groomsmen: null != (tj = tP.groomsmen) ? tj : [],
              }),
              "vi" === tq &&
                (0, n.jsx)(ey, {
                  theme: tP.theme,
                  brideName:
                    null == (to = tP.couple) || null == (tr = to.bride)
                      ? void 0
                      : tr.name,
                  groomName:
                    null == (td = tP.couple) || null == (tc = td.groom)
                      ? void 0
                      : tc.name,
                  weddingDate: aF(null == (tm = tP.hero) ? void 0 : tm.date),
                  side: tP.side,
                  brideWeddingDate: aF(
                    null == (tu = tP.hero) ? void 0 : tu.date,
                  ),
                  groomWeddingDate: aF(
                    null == (tx = tP.hero) ? void 0 : tx.date2,
                  ),
                  groomShortName:
                    null == (tp = tP.couple) || null == (th = tp.groom)
                      ? void 0
                      : th.shortName,
                  brideShortName:
                    null == (tv = tP.couple) || null == (tg = tv.bride)
                      ? void 0
                      : tg.shortName,
                  hasBridalParty: tW,
                  hasGiftInfo: tF,
                  customLogo:
                    null == (tf = tP.features) ? void 0 : tf.customLogo,
                }),
              (0, n.jsx)(ew, { playlist: tP.playlist, autoPlay: tE, lang: tq }),
              (0, n.jsx)(eS, { lang: tq }),
            ],
          });
        if (2 === tP.version)
          return (0, n.jsx)("div", {
            className: "bg-foreground",
            children: (0, n.jsx)(tH, { data: tP, guestName: tC }),
          });
        if (3 === tP.version)
          return (0, n.jsx)("div", {
            className: "bg-foreground",
            children: (0, n.jsx)(tH, {
              data: tP,
              guestName: tC,
              showDoorAnimation: !1,
            }),
          });
        if (4 === tP.version)
          return (0, n.jsx)(tR, { data: tP, guestName: tC });
        if (5 === tP.version)
          return (0, n.jsx)("div", {
            className: "bg-foreground",
            children: (0, n.jsx)(aB, { data: tP, guestName: tC }),
          });
      }
    },
    63784: (e, t, a) => {
      "use strict";
      a.d(t, {
        AP: () => c,
        TU: () => r,
        Yq: () => o,
        Zj: () => d,
        _$: () => i,
        af: () => l,
        as: () => n,
        vM: () => s,
      });
      let n = (e) => {
          switch (e) {
            case "green":
              return "\uD83D\uDC9A";
            case "blue":
              return "\uD83D\uDC99";
            case "red":
              return "❤️";
            case "pink":
              return "\uD83D\uDC97";
            default:
              return "\uD83D\uDC9B";
          }
        },
        i = (e) => {
          switch (e) {
            case "bride":
              return "C\xf4 d\xe2u";
            case "groom":
              return "Ch\xfa rể";
            case "both":
              return "Cả hai";
            default:
              return e;
          }
        },
        s = (e) => {
          switch (e) {
            case "yes":
              return "C\xf3 tham dự";
            case "maybe":
              return "Sẽ sắp xếp";
            case "no":
              return "Kh\xf4ng tham dự";
            default:
              return "Kh\xf4ng r\xf5";
          }
        },
        l = (e, t) => {
          let a = d(e),
            n = a.toLocaleDateString(
              "vi" === t ? "vi-VN" : "en" === t ? "en-US" : "ko-KR",
              { weekday: "long" },
            ),
            i = a.getDate(),
            s = a.getMonth() + 1,
            l = a.getFullYear();
          if ("en" === t) {
            let e = a.toLocaleDateString("en-US", { month: "long" });
            return "".concat(n, ", ").concat(e, " ").concat(i, ", ").concat(l);
          }
          if ("ko" === t) {
            let e = a.toLocaleDateString("ko-KR", { weekday: "short" });
            return ""
              .concat(l, ".")
              .concat(String(s).padStart(2, "0"), ".")
              .concat(String(i).padStart(2, "0"), " ")
              .concat(e);
          }
          return ""
            .concat(n, ", ng\xe0y ")
            .concat(i, " th\xe1ng ")
            .concat(s, ", ")
            .concat(l);
        },
        r = (e) => (e && e.trim().split(" ").slice(-1)[0]) || "",
        o = (e) => {
          if (!e) return "01.01.0001";
          let t = d(e);
          if (isNaN(t.getTime())) return e;
          let a = String(t.getDate()).padStart(2, "0"),
            n = String(t.getMonth() + 1).padStart(2, "0"),
            i = t.getFullYear();
          return "".concat(a, ".").concat(n, ".").concat(i);
        },
        c = (e) => (e ? e.trim().split(/\s+/).slice(-2).join(" ") : ""),
        d = (e) => {
          if (/^\d{4}-\d{2}-\d{2}$/.test(e)) {
            let [t, a, n] = e.split("-").map(Number);
            return new Date(t, a - 1, n);
          }
          return new Date(e);
        };
    },
  },
  (e) => {
    (e.O(
      0,
      [
        9201, 2726, 8895, 3750, 9740, 5479, 2150, 7672, 2666, 5563, 2810, 6382,
        8441, 1255, 7358,
      ],
      () => e((e.s = 50855)),
    ),
      (_N_E = e.O()));
  },
]);
