//import { timingSafeEqual } from 'crypto';

export class GoogleBookDataModel {
    authors: Array<string>;
    title: string;
    description: string;
    previewLink: string;
    infoLink: string;
    thumbnail: string;
    publisher: string;
    publishedDate: string;
    averageRating: string;
    printType: string;
    pageCount: string;
    subtitle: string;
    categories: string;

    private jsonPropertyMappings(googleBooksVolumeInfo: any): void{
        if(googleBooksVolumeInfo){
            this.title = googleBooksVolumeInfo.title;
            // TODO map all the above fields
            this.authors = googleBooksVolumeInfo.authors; 
        }
    }
} // end of class

export default GoogleBookDataModel;
