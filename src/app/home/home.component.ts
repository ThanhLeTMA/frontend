import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Thanh';
  public age = 25;
  public traiCay = ['táo', 'nho', 'cam', 'quýt', 'ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -3, haGia: false },
    { ten: 'Cam', gia: 435, haGia: false },
    { ten: 'Quýt', gia: -69, haGia: true },
    { ten: 'Ôỉ', gia: -547, haGia: false },
  ];
  public districts: any[] = []
  public vietnamData = [
    {
      city: 'Chọn Thành Phố',
      district: [
        'Chọn Quận Huyện',
      ],
    },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void {
     console.log('trai cay = ' + JSON.stringify(this.vietnamData));
    //  console.log('trai cay = ' + this.vietnamData);
  }
  public changeCity(event: any): void{
    const city = event.target.value;
    // Cách 1
    // console.log('event', city)
    // const search = this.vietnamData.filter(data => data.city === city);
    // console.log("search", search)
    // if(search && search.length <0){
    //   this.districts = search[0].district
    // }

    //Cách 2
    if(!city){
      return;
    }
    this.districts = 
    this.vietnamData.find((data) => data.city === city)?.district || [];
  }
}
