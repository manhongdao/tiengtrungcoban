const THANHDIEU_DATA = 
  {
    "thanhdieu": [
      {
        "img": "/images/pronounces/thanh1.png",
        "title": "Thanh 1",
        "example": "Bā",
        "chinese": "八",
        "guide": "Đọc cao và bình bình. Gần như đọc các từ không dấu trong tiếng Việt. "
      },
      {
        "img": "/images/pronounces/thanh2.png",
        "title": "Thanh 2",
        "example": "Bá",
        "chinese": "拔",
        "guide": "Đọc giống thanh sắc trong tiếng Việt. Đọc từ cao nhất xuống thấp nhất."
      },
      {
        "img": "/images/pronounces/thanh3.png",
        "title": "Thanh 3",
        "example": "Bǎ",
        "chinese": "把",
        "guide": "Đọc giống thanh hỏi trong tiếng Việt, đọc từ trung bình lên cao."
      },
      {
        "img": "/images/pronounces/thanh4.png",
        "title": "Thanh 4",
        "example": "Bà",
        "chinese": "坝",
        "guide": "Đọc gần giống thanh huyền và thanh nặng nhưng kéo dài. Đọc từ thấp và xuống thấp nhất rồi lên cao vừa."
      }
    ]
  ,
  
    "rules": [
      {
        "title": "Biến đổi thanh điệu của thanh 3",
        "ruleList": [
          {
            "content": "Khi hai thanh 3 đứng liền nhau, thanh 3 phía trước đọc gần như thanh 2.",
            "example": [
              [
                "你好",
                "Nǐ hǎo",
                "Ní hǎo",
                "Chào bạn"
              ],
              [
                "也写",
                "Yě xiě",
                "Yé xiě",
                "Cũng viết"
              ]
            ]
          },
          {
            "content": "Khi ba âm tiết cùng thanh 3 đứng cạnh nhau, âm tiết thứ 2 sẽ đọc thành thanh 2, hoặc cả hai âm tiết đầu đều đọc thành thanh 2.",
            "example": [
              [
                "我很好",
                "Wǒ hěn hǎo",
                "Wǒ hén hǎo",
                "Tôi rất khỏe"
              ],
              [
                "展览馆",
                "zhǎn lǎn guǎn",
                "zhán lán guǎn",
                "Phòng triển lãm"
              ]
            ]
          },
          {
            "content": "Khi bốn âm tiết cùng thanh 3 đứng cạnh nhau, âm tiết thứ nhất và âm tiết thứ 3 sẽ đọc thành thanh 2.",
            "example": [
              [
                "我也很好",
                "Wǒ yě hěn hǎo",
                "Wó yě hén hǎo",
                "Tôi cũng rất khỏe"
              ]
            ]
          }
        ]
      },
      {
        "title": "Thanh nhẹ trong phát âm tiếng Trung",
        "ruleList": [
          {
            "content": "Thanh nhẹ là một giọng điệu nhẹ và ngắn. Âm tiết thanh nhẹ vốn có thanh điệu nhất định, vì âm tiết yếu đi phát sinh sự biến âm.",
            "example": [
              [
                "桌子",
                "Zhuōzǐ",
                "Zhuōzi",
                "Cái bàn"
              ],
              [
                "爸爸",
                "Bàbà",
                "Bàba",
                "Cha"
              ]
            ]
          },
          {
            "content": "Khi thanh 3 đứng trước thanh nhẹ có gốc là thanh 3, thì giọng điệu đọc gần như thanh 2 (ngoại trừ {{奶奶}}，{{嫂子}}，{{姐姐}})."
          }
        ]
      },
      {
        "title": "Sự biến đổi thanh điệu của '一'/yī/",
        "ruleList": [
          {
            "content": "Khi “{{一}}” /yī/ đứng trước thanh 1, thanh 2, thanh 3 đọc thành thanh 4.",
            "example": [
              [
                "一天",
                "Yītiān",
                "Yìtiān",
                "Một ngày"
              ],
              [
                "一年",
                "Yī nián",
                "Yì nián",
                "Một năm"
              ],
              [
                "一本",
                "yī běn",
                "yì běn",
                "Một quyển"
              ]
            ]
          },
          {
            "content": "Khi “{{一}}” /yī/ đứng trước thanh 4 thì đọc thành thanh 2.",
            "example": [
              [
                "一样",
                "Yīyàng",
                "Yíyàng",
                "Như nhau"
              ],
              [
                "一共",
                "Yīgòng",
                "Yígòng",
                "Tổng cộng"
              ]
            ]
          }
        ]
      },
      {
        "title": "Sự biến đổi thanh điệu của “不” trong phát âm tiếng Trung",
        "ruleList": [
          {
            "content": "Khi “{{不}}” dùng đơn độc hay dùng đứng trước thanh 1, thanh 2, thanh 3 thì thanh điệu không thay đổi, đều đọc thanh 4.",
            "example": [
              [
                "不",
                "Bù",
                "",
                "Không"
              ],
              [
                "不多",
                "Bù duò",
                "",
                "Không nhiều"
              ],
              [
                "不来",
                "Bù lái",
                "",
                "Không đến"
              ],
              [
                "不好",
                "Bù hǎo",
                "",
                "Không tốt"
              ]
            ]
          },
          {
            "content": "Khi “{{不}}” đứng trước thanh 4 thì đọc thành thanh 2.",
            "example": [
              [
                "不对",
                "Bù duì",
                "Bú duì",
                "Không đúng"
              ],
              [
                "不去",
                "Bù qù",
                "Bú qù",
                "Không đi"
              ]
            ]
          }
        ]
      },
      {
        "title": "Vần đuôi /er/ trong phát âm tiếng Trung",
        "ruleList": [
          {
            "content": "Khi phát âm /er/, trước hết đặt lưỡi ở vị trí âm “e”, trong khi cong lưỡi lên thì phát âm (người Bắc Kinh hay sử dụng âm này).\n\nVí dụ: ",
            "example": [
              [
                "儿子",
                "Ér zi",
                "",
                "Con trai"
              ],
              [
                "耳机",
                "Ěr jī",
                "",
                "Tai nghe"
              ]
            ]
          },
          {
            "content": "Khi kết hợp với vần khác tạo thành vần cuốn lưỡi, cách phiên âm có phần cuốn lưỡi là thêm “r” vào sau phần đã có. Về chữ viết thì thêm chữ “{{儿}}” vào sau chữ gốc (có lúc được lược bỏ)\n\nVí dụ:",
            "example": [
              [
                "哪儿",
                "Nǎ ér",
                "Nǎr",
                "Ở đâu"
              ],
              [
                "玩儿",
                "Wán ér",
                "Wánr",
                "Chơi"
              ]
            ]
          }
        ]
      }
    ]
  }


export default THANHDIEU_DATA;