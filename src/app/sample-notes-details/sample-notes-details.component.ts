import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample-notes-details',
  templateUrl: './sample-notes-details.component.html',
  styleUrls: ['./sample-notes-details.component.css']
})
export class SampleNotesDetailsComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute) { }
  sampleId:any;
  ngOnInit(): void {
    this.getId();
    this.loadData();
  }
  sampleNotes:any = [{"title":"College Life","body":"My college life is not so good at all, because i got 6 such a boring dudes who are very good at saying NO to everything i said,each one of had different mindset and different thinking but all of them had one common quality which is nothing but saying NO to my thoughts.well we were good at studying things,apart from me these guys were good at saying NO,everything i has to initiate only whether it is a birthday or going to movie or something else everything was initiated by me only and at the final these guys will say no,hmm that'/s/' okay,college life i enjoyed a bit,we also had 3 three girls in our batch typically they are also boys haha kidding,everything was good and the college ended relationships differs, that is what happens in common...!"},{"title":"Kerala Vacation","body":"Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries. Other popular attractions in the state include the beaches at Kovalam, Muzhappilangad, Bekal and Kappad; backwater tourism and lake resorts around Ashtamudi Lake, Kollam; hill stations and resorts at Munnar, Wayanad, Nelliampathi, Vagamon and Ponmudi; and national parks and wildlife sanctuaries at Wayanad, Periyar, Parambikulam, Silent Valley National Park and Eravikulam National Park. The backwaters region—an extensive network of interlocking rivers, lakes, and canals that centre on Vembanad Lake, also see heavy tourist traffic. Heritage sites, such as the Padmanabhapuram Palace, Hill Palace, and Mattancherry Palace, are also visited. To further promote tourism in Kerala, the Grand Kerala Shopping Festival was started by the Government of Kerala in 2007.[6] Since then it has been held every year during the December–January period.The state's tourism agenda promotes ecologically sustained tourism, which focuses on the local culture, wilderness adventures, volunteering and personal growth of the local population. Efforts are taken to minimize the adverse effects of traditional tourism on the natural environment and enhance the cultural integrity of local people.The state has also made deep inroads into MICE Tourism mainly centered at Kochi.[7]"},{"title":"F.R.I.E.N.D.S","body":"Friendship is a relationship of mutual affection between people.[1] It is a stronger form of interpersonal bond than an acquaintance or an association, such as a classmate, neighbor, coworker, or colleague.In some cultures, the concept of friendship is restricted to a small number of very deep relationships; in others, such as the U.S. and Canada, a person could have many friends, plus perhaps a more intense relationship with one or two people, who may be called good friends or best friends. Other colloquial terms include besties or Best Friends Forever (BFFs). Although there are many forms of friendship, some of which may vary from place to place, certain characteristics are present in many such bonds. Such features include choosing to be with one another, enjoying time spent together, and being able to engage in a positive and supportive role to one another.[2]Sometimes friends are distinguished from family, as in the saying friends and family, and sometimes from lovers (e.g., lovers and friends), although the line is blurred with friends with benefits. The friend zone is a place where someone is restricted from rising up to the status of lover (see also Unrequited love)."}]


  @ViewChild('titleBox',{static:true}) titleBox!:ElementRef;
  @ViewChild('bodyBox',{static:true}) bodyBox!:ElementRef;

  getId(){
    this.actRoute.paramMap.subscribe((paramMap) => {
      this.sampleId = paramMap.get('id');
    })
    //console.log(this.sampleId)
  }

  loadData(){
    //console.log(this.sampleNotes[this.sampleId].title,this.sampleNotes[this.sampleId].body)
    this.titleBox.nativeElement.value = this.sampleNotes[this.sampleId].title;
    this.bodyBox.nativeElement.value = this.sampleNotes[this.sampleId].body;
  }
}
