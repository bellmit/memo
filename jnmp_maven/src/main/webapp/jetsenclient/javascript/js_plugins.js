﻿//lixiaomin 2009-12-10//=============================================================================// 浏览器插件//=============================================================================	 JetsenWeb.addLoadedUri(JetsenWeb.getloadUri("js_plugins"));JetsenWeb.registerNamespace("JetsenWeb.Plugins");JetsenWeb.registerNamespace("JetsenWeb.Plugins.DvnClient");JetsenWeb.registerNamespace("JetsenWeb.Plugins.MamClient");JetsenWeb.Plugins.createMamClient = function(container,id){    if(!container) container =document.body;    if (IS_MAC)    {          if(IS_SAFARI)        {            var objClient = document.createElement("embed");            objClient.id =id?id: "jetsen-plugins-client";            objClient.type="application/x-jnet-player-plugin";            objClient.style.width ="1px";            objClient.style.height ="1px";            document.body.appendChild(objClient);        }        else        {            var objClient = document.createElement("embed");            objClient.id =id?id: "jetsen-plugins-client";            objClient.type="application/jnet-player-plugin";            objClient.style.width ="1px";            objClient.style.height ="1px";            objClient.autoplay = "no";	            objClient.loop = "no";            objClient.toolbar = "yes";                        document.body.appendChild(objClient);        }    }                   else    {        //        var objClient = document.createElement("OBJECT");//        objClient.id = id?id: "jetsen-plugins-client";//        objClient.classid ="clsid:7B2AD00C-84FE-4140-BFBA-66894BA04D26";//        objClient.codeBase=JetsenWeb.baseUrl+"../plugins/"+"";//        $(container).appendChild(objClient);            var _id=id?id: "jetsen-plugins-client";        //var _codeBase=JetsenWeb.baseUrl+"../plugins/"+"mamauxclient.cab#version=1,0,0,1";        var _codeBase=JetsenWeb.baseUrl+"../plugins/"+"mamauxclient.cab#version=1,0,0,3";        var _classid="clsid:7B2AD00C-84FE-4140-BFBA-66894BA04D26";        if(!container)        {            container=document.createElement("div");            container.style.display="none";             document.body.appendChild(container);        }        container.innerHTML='<object id="'+_id+'"  classid="'+_classid+'"  codebase="'+_codeBase+'" viewastext="viewastext"></object>';       }};JetsenWeb.Plugins.createDvnClient = function(container,id){    if (IS_MAC)    {          if(IS_SAFARI)        {            var objClient = document.createElement("embed");            objClient.id =id?id: "jetsen-plugins-client";            objClient.type="application/x-jdvn-client-plugin";            objClient.style.width ="1px";            objClient.style.height ="1px";            document.body.appendChild(objClient);        }        else        {            var objClient = document.createElement("embed");            objClient.id = id?id: "jetsen-plugins-client";            objClient.type="application/jdvn-client-plugin" ;                       objClient.style.width ="1px";            objClient.style.height ="1px";            objClient.autoplay = "no";	            objClient.loop = "no";            objClient.toolbar = "yes";                        document.body.appendChild(objClient);        }    }                   else    {        //        var objClient = document.createElement("OBJECT");//        objClient.id = id?id: "jetsen-plugins-client";//        objClient.classid ="clsid:3066CF1D-8B8C-4482-8BF2-A0A22878EB41";//        objClient.codeBase=JetsenWeb.baseUrl+"../plugins/"+"dvnauxclient.cab#version=1,0,0,16";//        $(container).appendChild(objClient);          var _id=id?id: "jetsen-plugins-client";        var _codeBase=JetsenWeb.baseUrl+"../plugins/"+"dvnauxclient.exe#version=1,0,0,16";        var _classid="clsid:3066CF1D-8B8C-4482-8BF2-A0A22878EB41";        if(!container)        {            container=document.createElement("div");            container.style.display="none";             document.body.appendChild(container);        }        container.innerHTML='<object id="'+_id+'"  classid="'+_classid+'"  codebase="'+_codeBase+'" viewastext="viewastext"></object>';        }};JetsenWeb.Plugins.getFileSize = function(filePath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1=filePath;        return plugin.RetrieveFileSize();    }    else    {        return plugin.GetFileSize(filePath);    }};JetsenWeb.Plugins.copyFile = function(srcPath,dstPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1 = srcPath;        plugin.jsStringPara2 = dstPath;        return plugin.CopyFile();    }    else    {        var fileMoveXml= "<object><objPaths><srcPath>"+srcPath+"</srcPath><dstPath>"+dstPath+"</dstPath></objPaths></object>";        return JetsenWeb.Plugins.moveFile(fileMoveXml,"20");    }};JetsenWeb.Plugins.getHDInf = function(dstPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    return plugin.GetHDSize(dstPath);};JetsenWeb.Plugins.getPathInf = function(dstPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    return plugin.BrowsePath(dstPath);};JetsenWeb.Plugins.DvnClient.copyFile = function(srcPath,dstPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    return plugin.CopyFile(srcPath,dstPath);};JetsenWeb.Plugins.copyDirectory = function(srcPath,dstPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1 = srcPath;        plugin.jsStringPara2 = dstPath;        return plugin.CopyFile();    }    else    {        return plugin.CopyDir(srcPath,dstPath);    }};JetsenWeb.Plugins.moveFile = function(fileMoveXml,moveType,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    var _result;    // fileMoveXml="<object><objPaths><srcPath>/Volumes/MamDisk/TestClips/test.mov</srcPath><dstPath>/volumes/MamDisk/ad/mcmHighBitRate/20081209_161654_d35d96f6-721e-46f7-831a-b9f2205fcec9.mov</dstPath></objPaths></object>" ;     if (IS_MAC){         fileMoveXml.replaceAll("\\\\","/");     }     if(moveType=="10")                  //本地移动         result = plugin.MoveObject(fileMoveXml);     else if(moveType=="20")             //本地拷贝         result = plugin.CopyObject(fileMoveXml,0);     else if(moveType=="21")             //本地拷贝，并删除         result = plugin.CopyObject(fileMoveXml,1);           return result;};JetsenWeb.Plugins.deleteFile = function(fileName,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1 = fileName;        return plugin.DeleteFile();    }    else    {        return plugin.DeleteFile(fileName);    }};JetsenWeb.Plugins.deleteDirectory = function(directoryName,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1 = directoryName;        return plugin.DragFile();    }    else    {        return plugin.DeleteDir(directoryName);    }};JetsenWeb.Plugins.createDirectory = function(directoryName,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    return plugin.MakeDir(directoryName);};JetsenWeb.Plugins.dragFile = function(fileName,mode,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }   	if (IS_MAC)   	{   	    if(IS_SAFARI)        {            plugin.jsStringPara1 = fileName;            return plugin.DragFile();        }        else        {		return plugin.DragFile(fileName);		}    }	else		return plugin.DragFile(fileName,mode);};JetsenWeb.Plugins.openFileDialog = function(id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        return plugin.OpenFileDialog();    }    else    {        return plugin.openFileDialog();    }};JetsenWeb.Plugins.execCmd = function(cmdText,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1=cmdText;            plugin.jsIntPara1 = 1; //flags:0-Async; 1-Sync; 2-Sync RegEx         return plugin.ExecCmdLineByDirectCall();    }    else    {        return plugin.ExecCmd(cmdText);    }};JetsenWeb.Plugins.isExistFile = function(fileName,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1=fileName;            return plugin.IsFileExist();    }    else    {        return plugin.IsFileExist(fileName);    }};JetsenWeb.Plugins.importClip2Editor = function(name,filePath,mode,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1=filePath;//fcp        plugin.jsStringPara2=name;    //mov        return plugin.ImportClip2Fcp();    }    else    {        return plugin.ImportClip2Editor(name,filePath,mode)    }};JetsenWeb.Plugins.getMediaInfo = function(filePath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	if(IS_MAC)	{        if(IS_SAFARI)        {            plugin.jsStringPara1=filePath;   	        return plugin.GetMediaInfo();	    }	    else	    {		    return plugin.GetMediaInfo(filePath)		}	}	else 		return "";};JetsenWeb.Plugins.grabMovieFirstFrame = function(filePath,iconPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	if(IS_MAC)		return plugin.GrabMovieFirstFrame(filePath,iconPath)	else 		return -1;};JetsenWeb.Plugins.importClip2Fcp = function(fcpPath,clipPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	if(IS_MAC)	{        if(IS_SAFARI)        {            plugin.jsStringPara1=fcpPath;             plugin.jsStringPara2=clipPath;  	        return plugin.ImportClip2Fcp();	    }	    else	    {		    return plugin.ImportClip2Fcp(fcpPath,clipPath)		}	}			else 		return -1;};JetsenWeb.Plugins.listPathFilesByFlag = function(path,includeSubDir,flag,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	if(IS_MAC)	{	    if(IS_SAFARI)	    {	        plugin.jsStringPara1 = path;            plugin.jsIntPara1 = !JetsenWeb.Util.isNullOrEmpty(flag)?flag:1; //flags: 0x1-only search for mov; 0x2-Exclude Program,public folder; 0x4-Exclude Products folder            plugin.jsIntPara2 = !JetsenWeb.Util.isNullOrEmpty(includeSubDir)?includeSubDir:0; //includeSubDir - 0-No; 1-Yes                        return plugin.ListPathFilesByFlag();	    }	    else	    {		    return plugin.ListPathFilesByFlag(path,includeSubDir,flag);		}	}	else 		return false;};JetsenWeb.Plugins.listPathFiles = function(path,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	if(IS_MAC)	{	    if(IS_SAFARI)	    {	        plugin.jsStringPara1 = path;            plugin.jsIntPara1 = 0; //flags: 0x1-only search for mov; 0x2-Exclude Program,public folder; 0x4-Exclude Products folder            plugin.jsIntPara2 = 1; //includeSubDir - 0-No; 1-Yes            return plugin.ListPathFiles();	    }	    else	    {		    return plugin.ListPathFiles(path,includeSubDir,flag);		}	}	else 		return false;};JetsenWeb.Plugins.doMediaTask = function(filePath,framePath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	if(IS_MAC)	{        if(IS_SAFARI)        {            plugin.jsStringPara1=filePath;             plugin.jsStringPara2=framePath;  	        return plugin.DoMediaTask();	    }	    else	    {		    return plugin.DoMediaTask(filePath,framePath);		}	}					else 		return "";};JetsenWeb.Plugins.listPathDirs = function(directoryPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	    if(IS_SAFARI)    {        plugin.jsStringPara1=directoryPath;  	    return plugin.ListPathDirs();	}	else	{	    return plugin.ListPathDirs(directoryPath);	}	};JetsenWeb.Plugins.parseFcpSeqXml = function(filePath,type,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	    if(IS_SAFARI)    {        plugin.jsStringPara1=filePath;  	    return plugin.ParseFcpSeqXml();	}	else	{	    return plugin.ParseFcpSeqXml(filePath,type);	}	};JetsenWeb.Plugins.qtPlayFile = function(filePath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	    if(IS_SAFARI)    {        plugin.jsStringPara1=filePath;  	    return plugin.QTPlayFile();	}	else	{	    return plugin.QTPlayFile(filePath);	}	};JetsenWeb.Plugins.modifyFcpSeqName = function(fcpPath,seqName,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }	    if(IS_SAFARI)    {        plugin.jsStringPara1=fcpPath;          plugin.jsStringPara2=seqName;  	    return plugin.ModifyFcpSeqName();	}	else	{	    return plugin.ModifyFcpSeqName(fcpPath,seqName);	}	};JetsenWeb.Plugins.execCmdLineByDirectCall = function(cmdLine,flags,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1=cmdLine;            plugin.jsIntPara1 = !JetsenWeb.Util.isNullOrEmpty(flags)?flags:2; //flags:0-Async; 1-Sync; 2-Sync RegEx         return plugin.ExecCmdLineByDirectCall();    }    else    {        return plugin.ExecCmdLineByDirectCall(cmdLine,flags);    }};JetsenWeb.Plugins.exportAXIF = function(fcpPath,axifPath,id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {        plugin.jsStringPara1=fcpPath;            plugin.jsStringPara2 = axifPath;         return plugin.ExportAXIF();    }    else    {        return plugin.ExportAXIF(fcpPath,axifPath);    }};JetsenWeb.Plugins.getUserName = function(id){    var plugin = id?$(id):$("jetsen-plugins-client");    if(plugin==null)    {        jetsennet.alert("缺少插件!");        return;    }    if(IS_SAFARI)    {         return plugin.GetUserName();    }    else    {        return "";    }};