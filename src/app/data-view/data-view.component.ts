import { Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit, OnChanges{

   

    events: string[] = [];
    opened: boolean;
    public selectedSource: string;
    public selectedType: string;
 

    dataSources = [
        { id: 'id1', sourceName: 'North America' }
    ];
    countryTypes = [
        { id: 'id1', countryType: 'Canada' },
        { id: 'id2', countryType: 'Mexico' },
        { id: 'id3', countryType: 'United States' }
    ];

    constructor() { }

    changeSources(data) {
        alert("Continent " + data);
        console.log("Continent " + this.selectedSource);

    }
    changeCountryType(data) {
        alert("Country Selected" + data);
        console.log("Country Selected " + this.selectedType);

    }

    public yearNum = []; twoThousandChecked; twoThousand7Checked;
    public genderChoice = []; femaleChecked; maleChecked;

    onYearCheckboxChange(event, value) {
        if (event.checked) {
            this.yearNum.push(value);
            alert("Year " + this.yearNum);
        }
        if (!event.checked) {
            let index = this.yearNum.indexOf(value);
            if (index > -1) {
                this.yearNum.splice(index, 1);
            }
        }

        console.log("Year List " + this.yearNum);
    }
    onGenderCheckboxChange(event, value) {
        if (event.checked) {
            this.yearNum.push(value);
            alert("Gender " + this.yearNum);
        }
        if (!event.checked) {
            let index = this.yearNum.indexOf(value);
            if (index > -1) {
                this.yearNum.splice(index, 1);
            }
        }

        console.log("Gender List " + this.yearNum);
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.showSelectedDataView();
    }
    showSelectedDataView() {
        if (this.selectedSource === 'id1' && this.selectedType === 'id1') {
            alert("You Selected Data For " + this.selectedSource + " " + this.selectedType)
            console.log(" North America and Canada");
        }
        else if (this.selectedSource === 'id1' && this.selectedType === 'id2') {
            alert("You Selected Data For " + this.selectedSource + " " + this.selectedType)
            console.log(" North America and Mexico");
        }
        else if (this.selectedSource === 'id1' && this.selectedType === 'id3') {
            alert("You Selected Data For " + this.selectedSource + " " + this.selectedType)
            console.log(" North America and United States");
        }
        else if (this.selectedSource === 'id1' && this.selectedType === 'id1' && this.yearNum === this.twoThousandChecked) {
            alert("You Selected Data For " + this.selectedSource + " " + this.selectedType + " and Year " + this.yearNum)
            console.log(" North America and Canada and 2000");
        }
        else if (this.selectedSource === 'id1' && this.selectedType === 'id1' && this.yearNum === this.twoThousandChecked && this.genderChoice === this.maleChecked) {
            alert("You Selected Data For " + this.selectedSource + " " + this.selectedType + " and Year " + this.yearNum + " and for " + this.genderChoice)
            console.log(" North America and Canada and 2000 and Male");
        }
    }
}