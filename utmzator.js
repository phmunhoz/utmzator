<script type="text/javascript">

  function getSetReff()
  {
       
      var _reff=[]; //settings
      var __mv=7; //max referrer values
      var __tsc = t__apc = [];
      var __rf = __tpc = res__apc = __gsr = __nwss = __lp = "";
      var __cmp = "utm_campaign";
      var __mdm = "utm_medium";
      var __srcs = "utm_source";
      var __cnt = "utm_content";
      var __trm = "utm_term";
      
      var __sesst = 1/24/60*30; //half an hour cookie

      if (typeof dataLayer == "object" && typeof innrDataLayerHelper == "function")
      {
          var __dlh = new innrDataLayerHelper(dataLayer);
          for (i=0;i<=dataLayer.length-1;i++)
          {
              if (typeof __dlh.get('setDomain') == "string") _reff.push({'setDomain':__dlh.get('setDomain')});
              if (typeof __dlh.get('maxValues') == "number") __mv = __dlh.get('maxValues');
              if (typeof __dlh.get('sessionTime') == "number") __sesst = 1/24/60*__dlh.get('sessionTime');
          }   
          
      }
      if (_reff.length === 0) _reff[0]={'setDomain':document.location.hostname};

      //get cookies
      var __asc = (typeof rC("__sreff") != "undefined" ? rC("__sreff") : ""); // session cookie
      var __apc = (typeof rC("_traffic_source") != "undefined" ? rC("_traffic_source").split('|').slice(1-__mv).join('|') : ""); // long term cookie

      function rC(k){return(document.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2]}
      function sC(n,v,d) { dd = new Date(); dd.setTime(dd.getTime() + (d*24*60*60*1000)) ;e = typeof d != "undefined" ? ";expires="+dd.toGMTString() : ""; document.cookie = n+"="+v+e+";domain="+_reff[0].setDomain+";path=/"; }
      function gcP(p) { if (document.location.search.indexOf(p) != -1) { return (""+document.location.search.split(p+"=")[1]).split("&")[0]; } else { return "(not set)"; }  }
      

      //referrer or params?
      if (document.location.search.indexOf(__cmp) != -1 || document.location.search.indexOf(__mdm) != -1 || document.location.search.indexOf(__srcs) != -1)
      {
          __gsr = "::campaign:";
          __gsr+= gcP(__srcs) != "(not set)" ? ":"+gcP(__srcs) : ""; 
          __gsr+= gcP(__mdm) != "(not set)" ? ":"+gcP(__mdm) : "";
          __gsr+= gcP(__cmp) != "(not set)" ? ":"+gcP(__cmp) : "";
          __gsr+= gcP(__cnt) != "(not set)" ? ":"+gcP(__cnt) : ""; 
          __gsr+= gcP(__trm) != "(not set)" ? ":"+gcP(__trm) : ""; 
      }
      else if (document.referrer.search("(google|bing|yahoo)")!=-1) { __gsr = "::organic::"+document.referrer.split('/')[2]; }
      else if (document.referrer != "") { __gsr = "::referral::"+document.referrer.split('/')[2]; }

      __gsr = ((document.location.search.indexOf("gclid") != -1) ? "::campaign::google:cpc:"+gcP("gclid") : __gsr); 
      __gsr = ((typeof __gsr == "undefined" || __gsr == "" || __gsr.indexOf(_reff[0].setDomain)!=-1) ? "::direct::" : __gsr);

      __lp = document.location.hostname+document.location.pathname;

      if (__asc)
      {
          __tsc = __asc.split(".");
          __tsc[1] = new Date().getTime();
          __tsc[2]++;
          __asc = __tsc.join(".");
          sC("__sreff",__asc,__sesst);
      }
      else
      {
          __tsc[0] = __tsc[1] = new Date().getTime(); //start time = current time
          __tsc[2]=1; //first pageview
          __asc = __tsc.join(".");
          __nwss = 1;
          sC("__sreff",__asc,__sesst);
      }
      
      

      //if new session
      if (__nwss == 1)
      {
          res__apc = (__apc != "" ? __apc+"|" : ""); 
          sC("_traffic_source",res__apc+__lp+__gsr,730);
      }
      else
      {
          t__apc = __apc.split("|");
          __tpc = t__apc[t__apc.length-1];
          __tpc=__tpc.split("&")[0] != "" ? __tpc.split("&")[0] : __lp+__gsr;
          res__apc = (t__apc.length == 1 ? "" : (t__apc.slice(0,-1).join("|")+"|"));
          if (__gsr == "::direct::" || __tpc.split("&")[0].indexOf(__gsr)!=-1) 
          {
              sC("_traffic_source",res__apc+__tpc,730);
          }
          else
          {
              sC("_traffic_source",__apc+"|"+__lp+__gsr,730);
          } 
      }

      return rC("_traffic_source");

  }

  function getCookie(name) { //Gets the value of traffic_source 
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    var history_utms = parts.pop().split(";").shift();
    return history_utms.split("|").pop()
  }

    function getUtmSource() {
    var traffic_source = getCookie("_traffic_source");
    
    if (traffic_source.split("::")[1] == "campaign")
    {
      return traffic_source.split("::")[2].split(":")[0];
    }
    else
    {
      return traffic_source.split("::")[2];
    }
  }

  function getUtmMedium() {
    var traffic_source = getCookie("_traffic_source");
    
    if (traffic_source.split("::")[1] == "campaign")
    {
      return traffic_source.split("::")[2].split(":")[1];
    }
    else
    {
      return traffic_source.split("::")[1];
    }
  }

  function getUtmCampaign() {
    var traffic_source = getCookie("_traffic_source");
    return traffic_source.split("::")[2].split(":")[2];
  }

  function getUtmContent() {
    var traffic_source = getCookie("_traffic_source");
    return traffic_source.split("::")[2].split(":")[3];
  }

  function getUtmTerm() {
    var traffic_source = getCookie("_traffic_source");
    return traffic_source.split("::")[2].split(":")[4];
  }


  getSetReff();

</script>

