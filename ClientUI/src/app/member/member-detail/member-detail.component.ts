import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../../_services/member.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../_models/member';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [TabsModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit{  
  private memberService = inject(MemberService);
  private toastr=inject(ToastrService);
  private route = inject(ActivatedRoute);
  member?:Member;

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember()
  {
    const username= this.route.snapshot.paramMap.get('username');
    if(!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member;
      },
      error: err => {
        this.toastr.error('Error fetching member data:', err);
      }     
    });
  }
}
