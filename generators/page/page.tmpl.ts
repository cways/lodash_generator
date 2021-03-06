import {Page, NavController} from 'ionic-angular';
import {<%=jsClassName%>Service} from './../../services/<%= fileName %>/<%=jsClassName%>';
/*
  Generated class for the <%= jsClassName %> page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/<%= directory %>/<%= fileName %>/<%= fileName %>.html',
  providers:[<%=jsClassName%>Service]
})
export class <%= jsClassName %>Page {
  constructor(public nav: NavController,private <%=fileName%>Service:<%=jsClassName%>Service) {
    
  }
}
