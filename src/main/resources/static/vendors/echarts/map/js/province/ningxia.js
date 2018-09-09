(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('宁夏', {
        "type": "FeatureCollection",
        "features": [{
            "id": "640100",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@[ŅUcoYkIGĩË@ENOBEZEH@BCVGHCRQ^aRKYv[ZIVAhGPCRIvMfQRAZSVUbQVGKPC@CFGUKGQCMBSH[¯JSEGmUQBLYgSeHECWBUJgBGV[DAPHHBrDDAG]DG@[FBCV[VPGA[GYMYWu{sUoOWECCE_FgFDMAk¹FÅ`KY}WkMEGCJOTGJSLONW^OJja^[\\EFcTUJaDaZYLS^GJaRg^BLM@CDKAIBSBUH@H@BUJCHGF@DGLBDFB@BIFFFBDI@BFE@@BJTCD@BJBADHBzB\\FD@FCTBBBXVHRID@xIBaBA`EBw@MLADBFJDTV@B]TIP@FABQJUKA@M`GDCD@BH@BDADIB@JEFDD@DQLKFEDKVCPIJMHSFAFCFBD@HHXHHTJFH@LS^CJBHiHABGHSFDPCBKCOBIDMJIDOAEAAAMOGIGBArED]JFF@DAD[FAAEGC@WDADJJADGH@DNDADMD@DNFBDADIAAAWUICCCCKAEWUEAkRMBEHAG@GGOsLEGU{AA@@s`HRVjbzGL`aJEFGJGDGLJLXFTHNBDQZ]\\K`GJIHAPIJCLBFFLV^@DGXENBVDNGJBFJHT@PL@DINCPKNCRJJ@NPPAJENBLXPJJBV@TCPIT@PFNBBVFBBDHBHADKHABAJCJOLARELAH@NDHJLNJJFFDBFCNBFFFNJV\\BBAJQ\\@FBDTLHJJDBBDL@JCNCFCDADFRFHBDKJGHAL@HDBVDFFPFLLR@BBAHBDLNDFFHVPNFFHDLTFXRHLDLLHBHN@jKZ@NAFAXUJ@PITIRI\\C^ADCBMDILGFEDANCxAJALEV@BKLCJ@`PPFJIHQBCH@VDFAZMJGLA@MDAH@JBPLXBDAEI@EBEHGJAVBHHXENEfDRFBGKSAKnEAK@iHE^GF@JFNEP@FKMODQBEhNLPZ@NC^OALGLKXEjEr@@[EOKIbChM`GHGAgPK"],
                "encodeOffsets": [[109223, 39528]]
            },
            "properties": {"cp": [106.278179, 38.46637], "name": "银川市", "childNum": 1}
        }, {
            "id": "640200",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@J{AQWËIO¥ue_]gkEKCCQWEKWYcq{MUěYZOLBhGH_HgNaDLJFP@\\q@iFWFKLKHB]PMDY@KOgMAFCRNPELO@MFIEE@]HGF@jBLmFBLLTAHQEeCMFWFGGUAIBGHAH@DFJABYAOKKAG@APKBIHYNEBUCG@ADGRIJOE_OI@KDALU@KFIBwBQFQRCFANAD{FQJSJOJI@WVEBMBY@iLM@@@GB[CKLOVCNANHNNLZRFBZRRZNN\\NLBPATLDJ@JJTFFLBHNLNDJBLABGHGFEHFHJH@@IFFN@RJZLNDVJLPLHJL^JNFJLR\\bVP\\FNIHMRORERAHAzENGJALFNHZHPHDDBJLTDLCPKVAR@JDfCLAVGVC`BFHJLHJ@ND\\ANDJA^LfH\\FLAVDNBJBPCV@`CPEbCRGBA\\GjGHBJHBF@LJF@LBDDBALFBDFCFR@NPJBFFPFDDBDHDFFDHLNHDJHJRRXDFJHzSPKJCjEV@LBXRpTVCLBTLNDD@DIDELAV@TALIFIP[@CIO@ELQPO@GIW@SH_COUaCM@IJGFKAICK@MLKXKXQHYHa^uLkJQXUVMlMFCDAFAFBHAF@VGFBHIHABEBIDCPBLKDCJB"],
                "encodeOffsets": [[109535, 39993]]
            },
            "properties": {"cp": [106.376173, 39.01333], "name": "石嘴山市", "childNum": 1}
        }, {
            "id": "640300",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@HCPDTCNDFF@LDJLLJLDBHAHIhETADBLFD@DCRODGXQ^GFIJOPK`IbEVK`AN@lQHCFKPUPKLEDOBC^UPOVaFCLAZAVCJEHG@EJEBAoKYBCNK~ORR`Ff@HERS°ÜkVMJCLID]SqG]KSggK@KDGNEDEJC@KCGDBLEBGCIG@ABCJELBF@@A@EM@YMg@{GoMIKG]DYCWCMGOMMYQOCI@mII@EBUNIBgCEKJ[zIJAA[CCgHEAomCCQK@CDGGEGCOGeBCCGA[HhsXEtNHIBGEICOCECSESEKIGESIK[UkYGC]IMMCG@SBmAQQESSg@MBCDWAIIOAKFI@GHWL[FKLILEBCJCBEDB@EDC@AFABCAAHEACDEBB@EDABKDAACBEACBA@C@CAAE@SFGBOGUCEC@C@EJGXM^URIFEJB@EFCBCE@FCD@BABIDA@GFAACDA@EFAACDAACDEBEACDCEABEB@@AGEFCCEBAAABCEADCGCBCAEBCKG@CCCEKECC@AC@CG@BGIMKRIFADCAEFADCFEF@@CBBBABAAGFEACEHEBM@@KACEHAHDD@@AGCBKHGJE@AMFGAKDgNEAIKME@DCFA@@DC@GJCBADGBADC@CDCD@BGFCFGBADKFEFGDORUGK@UCE@KCI@KCCAGCAAEAECGACBQE@COKEACFGDGLE@IFG@IAGCCCC@SHEFGAQPGBCDIQ@ABIDCBGDGAQC@ADGFE@QFICIJQFIGDAHCBGJC@AGCIDM@UFKBODAD@HINWTKDEDGDADKDABM@SJKCAA@GKECA@CZMB@DBNADMDCUA@K@CHCBEAAE@K@CAGEACBGGAIHKLUPWCG@]XGFCCIJEBIJCFEFGDS@UNADCDEBCA@BGDCAE@@@DAEAD@DCFE@AEEC@CL@AEA@CCMEABECC@CJQDE@CKKCGIGGIDENGEIASA@KHGJCJDFCFIBKACFBHACCAMJ@NDJABIAQAKDQGGDGHGNAAKKISECGACFALAHEDCBUESIGTK@GFOFEBCAACDGEFA@GCCCBAHIFM@EJMFQFGDAFMLANQHS@EAEBC@CDEBOFGACBGNI@KHEHCBCKOECQJE@IADE@C@AHIAECEEODKGMBKFKMB[GCDEAEBOBSJCDACGG@K@EDEBMDGGAGCGCGAIDGLCFBBH@FCHDUVBDCBCDGBGFQPGPGFC@ACAIFG@GNOHMFEECAECIBELGFBHIPCDDNALIFINANCHKFEBIECCEFK@CCBIFAABC@CFGHEACDABEHLHBBHNFD@JEDELG@AAAGBECAAFEBCHE@ECAKFDE@AEAGECBAAJE\\K@ACAFGAC@GAE@GGENAJBACBCBCPIBEC@AC@CDCAEE@ECEFA@AABIE@CA@CFC@GAGEE@CEB@EAADACCDCAA@A@CBG@ECC@KCEAGK@AAJOCKD@@GFEDADEJABCBAAAEAKFECA@a^@@ACCAAIKNCHG@IL@FCBG@EKAAEBMDC@@A@EEEDICCG@YJA@AIAAG@EAABCAAIEBIHAC@GIEGEKAEEJK@AD@DCBEBCLWC@KDAC@AGACFA@CDAACBECEB[KAC@GBIHOCOHKDK@CG@@AC_SC]MKBEAEFSDEACBEBKRCBAA@I@ASGACEDI@MISDMBE@ICHG@CACEEO@QCyQ]KUBEBMTCHOBKAOGABCNUJIDCC@C@GMKC@EDQFIB]EEACG@M@UBGC@IJUBYCWOEA]RCVGNLZAJgjYLAZW\\A`y|SlHd[VU\\cXD`E\\qd[CMJOEIF@H\\XILBX_TCTKHI@AJJB@HiZAREBK@CA@I@A]QGAECEBCFEBC@IELQ^[@IIIKEDGIMOQIEKECCBKACCCSCCA@GGE[GECCO@OCOIEEACBCN@NCJKJODKAOEKGM@OAOBGJC@WQECA@ILBBDHGPCNAZ@JDHJBJD@HEXBH\\^ABGLQJOND@HEDBJAHCFETCAHBFLJJDJ@BJDFBBF@HFRJDDJDHHPDLJDD@FDDALBDADDHBBB@NHD@FDF@MNÔ]rED}@MJspIF]H[NOXKbAJFFBH@RCFEB@PADCDmAGAkPWBIA[@IBKHCLMJSDHDT@LBDBBDFB^ARDf`LFLJZZfTJLFDB@HGBCGAAA@ADCBIHCHGHUFK@OGEACAGEGACLEBEDC^WJI@IZBX@LDL@FD`BNDNJADE@CHBDBDFADBDDADKHECCBAFBFADB@DCD@@BABOJDHF@@BEFMHCAGHBDABDDGDBLED@DCB@BCD@HAHQZGH@BjNNBZHLLLBJFDNBBŌUPHPRDJBF@HGHKHKLWLU@aRWDIDoZKHADDFDRDBDBhG^@DBAHSb@BPPNFpJD@LGDCB@FDL@DBFJAZLB@ABEBBDEABDE@FFE@@DEB@DGFABA@BDIECDE@ABC@AFPDJAR@NHHALEH@HFLBLNBLDJBFDBNLNFFRFDF@FCL@FFBDFDVFLADBBBIJGFMTOHYBMHEJDBDAB@@BsrILEN@DDPJHZAHHCNAJBHFH@JALEDSFIJCB_@KDEDEBW@OCM@SHILEDEB@CBK@EAIIOKGGMKMEMAMAAAAkBABFHRN@DKRCLMH@DDDBD@JCDJPFXBb@fVTFFCXABMEUAcHW@QUGD_HGBICQDUBQDG@UKWIM@Y@qHGCUCKCS@OAaIUIEIgEgAFHHX@LrHDNDL@JAREdCNGL@tPTFNJhJNHRHXVN`DPFJFJXXLLDHFTC\\EREJCNAjBNBFXlX\\P`PVBF@HCHCDMXUXS\\_`YdQpG\\BPAJDPDrFRAHBPLXDHPNHJRLLDXJZNRNBLTfIB@HKHCHIFEbI_HKayUiGQt_X~FHtKHP@HBHFGNAlQFBXVBFDLDDJDXVBBJBBCACME@CNCBCMC@CHGBCIIBCXCD@FHBB\\EBC@CEE^IFCBqHAHJNPBBFBPBJCNIJCPALDDACOTEHGBAjGAGDIT]@KEGSIGGGW@GACDEBETENGJIDOLUFCLERK@CCCFE@IJABCACG@@ADCHCN_B@VLRIBA@EJO^S@ASUICAEBCNKx@FAB_bAJA@wJCGQWUAASAEDC@[EyAGABCIA@ADCIS@AF@AEJ@ACEEJE@AEAACHK@CHEDGVI@A@GVGTAJALBDCN@AKh]bQHIT]ZKbYbCVIdSFE\\[b]iPIX]PMTKHIPSDIFHlN~XLZÆ_ºEBlCNEEhF`DDXFpPtV|XvNZHZB\\HUOU\\ADE@\\CHH^CBqCGAOGCBU\\AHIhAVDXGFTfZhKRAnVFHIT°G\\ATDNHRVLEH@DQZIVER@bMQÄUL@DLFBJALBRGJAN@DDPNDHLHFAJGTGB@HJF@"],
                "encodeOffsets": [[109666, 39051]]
            },
            "properties": {"cp": [106.199409, 37.986165], "name": "吴忠市", "childNum": 1}
        }, {
            "id": "640400",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@AKGACBBDABD@BDDDD@", "@@AGBAC@EJBH", "@@@@A@OLBLAL@BD@FGLG@AEIBG", "@@FCBCCIFG@CCGAKGIKCKKAC@CEK@AHAHEDG@GGCCICDE@ALKBAIBKAC@IGGBAHCXFHCLQB@FHFCJABCCEACBELEDEAECAI@MHODCBCCBUACC@CECAB@AA@DEBKEBAAA@HIDANIBKAGDI@CCAINIDCNKPIFCHCCGDAAOCAABKNOLSBGFEH@FIHADGDADIFBDHLBHCLKTGJKBADBDHBBHCD@DBHFFJAFDD@FELBFCHDH@DJEF@PEDBBCHFF@@IDI@AD@DABCDCBEDJF@@DBDCH@JDF@DFFD@B@DGBAB]DEFBBFF@FKD@LGD@HCD@BLDTHHB@HEEAAC@GDMAIDGLCDBBRD@LGHDDHNBBB@AHAADABHDHGFSNQBG@ID@BEDAJB@CDCLGBFDDTINJ@AFIFC@DFAJMRIBABABBDCDB@BD@DED@DCBRBDD@PKBPHBBAJCFGBEDABCHCDABHDDADLDDDDCFB@CJGFXHDJQD[AB@CD@DEDBFC@@ADBDBDF@HADBAC@CJIFIBQFEFCDED@DDDAFE@CJMF@DDJBBA@CHGFKHCFACIEGDECIACFGD@BDDGBAFBCK@CDFDG@JBJDBHLFB@AAMAG@AESHEHDHPHHDAHGIE@GAABMABA@A@AAE@PMP@DU@B@FDC@FDABC@GCGDC@IDAEAGB@@DB@BM@DGAEBBBAAEMCCACC@GACBCFABBJ@CEE@@C@@AK@WECQC@GAEAM@GFCDCRAFENBAGCABOCGGGQEGKAAEDA@AKIEEK@]ACC@EDAF@JDD@FCDEDACEBGCA@BHADA@CCCDABAAHUBKFGFCJCDBTCFPDDFBHAH@FFHKBGDC@CGQGFEACEMGMDCDGDGI@CAAEBBO@IG@IHIDE@MESSA@CDIAEDA@BCECDCDI@EYK@CFGJCLATCB@BHBBHEDE@EDEAEEDCBCFE@GG@CF@BCJ[@ABBABBJD@DCAOBCTU@CJGDEDATJBADCJSEE@CBARABE@CCCICA@EFCBKAGBEDGAAEDCFBD@BSDAHBBAEABAHBBA@KECHKGB@ABKAEEAMNCAACCOBE@AWBA@DJ@HCDQJE@C@EE@CBGCSB[CKAAIBMJGBMCMBCKCBCJEDK@EAAC@ELQAAEDEEFC@EEKKKIEIBEFALABECCAED@DC@AAA@CHGAAAA@EFIE@B@JCBEAMIC@AFE@AABICWDEKGAADEJDD@DKAEGAIDE@IEEFAEA@ABAFA@GDYTiVIJAJA@CCE@ABHHABEBICAIEG@AFK@AKF@GEBEGI@CBGNAA@GCAG@CBCDOFQXCX@HCBC@EECK@ICAAB@PADE@AHABGBCC@E@EFEAEGGC@KDO@EHK@GHCBS@KDKAMBCBK@ACBI@QCAG^K@IEK@GBSAECBC@AKEDC@ECA[EMCU]EEIMEAE@MG@YBGFG@ACC@CBCLDB@BQFGBETGCIGEAGDELGJIBCAI@OBAFCDCJ]AGDCJEBCA@EAKDMHG@A@IWEQCIACFKCKDABEMEMO@AFMLADCCG@EVIFEBKDGAUJCNDH@LDD@BECSESJAIIAGBGHGR]BOHEBA@ACCKSEUBAFADICG@KJIBECEBAPMAAG@KKIBACCQEGFOAAIGIMECEECCQEK@@CCAQKACEAADE@CAAAKEEKGECKGEC@IHC@GGWCKGULI@ECAEDKLQBKACIEACKIK@CBEFANABGDUAGDKREDGBADDN@HMJGLIAIBCDAFEDIFGF@FBDBHOTITMBK@OJAHCPGHIHAHDHLHBH@FKHG\\@FANCRS@QFC@CCOAM@KBEDCHEXC@@CCACAAD@PADIDECCOEMQG[[SKK@DGAECEAKEGBCAEC@CDE@ECACHMAEI@CBCHANGN@FFFBDABMD@FFH@FABY@KXDFBHMRDJ@HEJ@F@BGBADD@BAHF@BCDE@GHDJBFCRCNAB@JDDLBHAH@BBH@DJBBLDDB@FADGHCDQBICEGBGCOCCC@ABCVCBAA@EAAE@CBEBCAA@@CYCSCSAEBAD@JKJADBBH@DFATCDG@CACEC@OLGDQBIDC@EBUA]JU@[FQBMFGFCDC@KCM@GCBGAIUBIHGSAOCMCCGCGYIOEAC@KJAdALFJADAD@NANCDSIADFHFF@DG@CJADFJEHAJELMIMCEECBOREHMH@BEF@DB@J@DD@DGFDBABGFODI@GBKJBHCBIACFBDHBJ@DD@HHNADGDCACEAGGEQF@FFPAFEDG@IAEEE@KNABE@CB@BADFPHH@BAHBDDBBD@DEJGDMBIJYEABBP@DAJJHHDJCDBBFHHDNFHJJF@BCAGAAFKBUBEH@LCFBHLLJFJDBBDFPAFEFKCEFC@GEAICAEBMPEBK@CBEHI@EAGGWHAB@PABI@C@AC@KAAC@EBADAJAFABG@@AIAIEEBCEG@CCMAECACG@@CEAOGaEMECC@CBCACSBICMDI@@CFMDG@GCKGCEGC@CFCPNVBJCJILEBWDQKC@KJE@WGKGC@GHE@IACFCBSBGFAFG`ADABGDEAKII@@PDJDXAFSLMCEBIPCtALCBEAIIA@ABANADC@IAYUEIKWEEEBCDIRBDVX@BKEE@CBBFDF@DEVGNAD^TLMHABBBDBLCLGHKHMHICGBKDMLCEKAQHORKZAHFFFDF@FADBENAZCFQNAFBDDDBFFFF^ANDNCjFFD@AB@BH@@PBDEFBFBBABDDAFDDBHFAFBDANFDAJ@ELCB@DFLJJFABHLJH@DBDCDLDEBD@RBDJ@FFLIDBT\\HFFBLVJ@DABBB@FIBHH@FBBCDABDJHH@DABCFEDBDCDBDABDB@FEDBHABBBDFAPfBB@FENPCBJDLNPCFQLGF@LKFBFENGPBFAFNABFjVRPVNXNJLDNBDED@BCVCFI@O@CJGLEJIFIAIFAFCLEDGFAHK`WLKNI\\EH@LDTZPJXDXAPADBFHHDJ@TIJOLWYUKEGIDEL@LHHDJ@JCPBPFH@JCFKBMBCJEDBRNVXRHPLJ^LRRVRLCPALBJBJDDr@tEX@JC^Q^MZCR@E^AbMlQ`UlIPBHFHNDDBBHCLBFHH\\C`GHJBJJJ\\@fLFAJEVIDBBHBFJ@DALO^OH@NLLDJB^@bN`HPFZDFDFPFHpffTFBF@\\CJBDFBJNjBBJGFANBJHF@NCHBBBAVBNDNHRPX@BA@KKEAC@@RCXGHBJJDLFPBLNDPVADDDJHHLFF@LFH@dKR@PHDDAFNCHELBJFB@RSXUHAJFHGFDDAF@FCBMLMH@BDF@CFFPBBB@PS\\E", "@@R@DECGIMAMFIEGFIAKCACJI@EB@F@FKNAFEBGCGGMAAA@EOK@EFI@CMIC@ABBHAFOJAADGAOACQAKCEAACBCKCCACAABELABC@EGO@AC@IA@A@IFQBCCGGE@EAMCCCO@KGCDANELA\\BJBFLH`DB@FGH@DBJBTPJ@PBFFL@NFHHJBFCRHDDBBF@FBJ@D@FBFFDBLCNDLJHBNCFDFB"]],
                "encodeOffsets": [[[109061, 36594], [108620, 36306], [108619, 36271], [109075, 37357], [108594, 36341]]]
            },
            "properties": {"cp": [106.285241, 36.004561], "name": "固原市", "childNum": 5}
        }, {
            "id": "640500",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@CCOGG@I@[JGBG@KEE@KEGGCICCUBCOIKAAOAKEICAE@EFABCDW@QD@FBLLB@@AOWGQCMAMBUAAGAMDE@IGMAEBIHAAMiAICEIA[DE@EAeSoeEGEOECYCOE_GaM]@IAKCMKG@]PKPCBI@AEAGCAUJIFEBeK[@IIAIGI_H[DGGAEDKAGCAMCEGAGJOVkR_NkBaF]Q@YD]N]RIDW@sFq@CCAIAIBKDOQKQUKQI]OKQGUWQMCAIFADANELIDG@OEOAIDI@GCKGK@CFHJLFZVKXIPSJI@GCEGCAOBWBWCOISYKCG@[FMJKL_XGLEBCHKFEDEBBJEJIJKFIH@D@PEJUDADC@CFMAKCMIWUMQOiUAEMBGJ@LEAABBJ@FEHEBADIFKDGFEZBHHHHPENGJ@HDDJJL@DDFR@LGNIJOJCFCFAPABQFU@EFMD@PABEBCDADDFG@ADC@EDAFCDBBABEBAF@DELB@X@FD@DFHINWBA@In@LFX@HCBIFGFAFED]G@IAAABIJAFBFLX@JBFCDELBLDFAJCNGPYVIJMHCHQNINC@OEECIKCAC@EDMBGAKECHEAA@CFAFEACBEFA@EAEVQDHNTJF@JHH@DBELDLAFIHGPBBHFAFONUCKXE@@B@V@BO@CBAFE@CDGACBADFFAHFJBTFJEJa`M\\@JAHBDFJFDRdTJJCP@BDAJ@DBB^@^EFB@JHJ@DBBNCP@NCRMH@RBTRHVHBHD@FI^@LCN@JCLIAOHQNKFIJCF@LGDCB@FBBF@BHeTBBBHAL@HADGB]VWVEEC@ADFFIFEEE@OOCDALGEEDUJGCGDAEEAECBEC@BC@AYLFLGBBDHCBHC\\IZTEEF@BDB@HADBJGDBDGDCRBFEHIDCDE^@ZODUAOBS@ODGBMB_LGFOFOBQJOJKEG@MMEKAAK@EDCDaNF^SHYAEHAACGA@YCEAGBUR@~ANEHEDaF]TCFHR@DAFINEDIHMDBBAB@BDBCFDD@HBDGAEH@FGNCHIB@DIHYLAB@LADIHADBfEFBDADOJ_LKLABMBO@IJCACCKCEAAFCBAFGLUJSOOAMEEKICIIMECGWMW@YGKBGEIDI@IAIJA@AAACICUBECGAMBIFCNKHGJGDShAD@PHTLPDHADFDJBHAFF@JKLBHHFPBZQH@H@JLNFBXLJNFH@N@\\VDBPCDDBHFHAXG@UIMBIFSFODIDM\\AHBFHHDFDJBTBDPJBFQH[BGDCDSDGBQEQ@GDE@KNEBqB_FUGKAGCGHCBGBEDADSDGICAI@EGOGOAMDgEMBQJGVOTC@KCsKIEQEIIUCGIKCiDKYAUP@N`\\hNJ@PIJ@bLPPNHjA`HFdR~VAFHĤHâHþRîNJBv`X@lLĈNbN¢xjdDDRFJ@VD~\\nLVLNLbPTD^B`JbDbPhNR@L@^F`BZF`APDHBXC\\CfQpEHBhApBh@¨H^@JDLJhBhFFJVJbJPBT@LDVDHDrGZ@N@XJVLH@RCVARCJDHA`GHCRVX@dGVBNFBADWEEUS@eAaEWIODC@IACCC@CNGDKLQ@CQMEGBAlABBBBBNFNLNHNLHJPBJ@FAL@DFAFCJKTGN@PDX@FAFCLC`@DAJITEFCBK@IEGAGBIDMGGYBIGCO@CFMJKtq@AA@CBCAFINGZAPGNSHEJIAACAKBUEECACEEK@EDE@ECEQMEMKCAAECIAKKMKAGEG@KFGBMGQ@IBOCBED@BAF@DCJFACB@BAHE@CFA@CF@EEF@ACFBACFABAA@KBYEICAK@ECA@CDKHC@oIMEOO@ATaBGCA]@gHCACACQCEBCTMhSJCXCbQV@XKDCTOHG@GEOOQOGŋVAACMIEKAKKYGMAiM@AHGRYBG@GDC@ADA@CFCAKHCCCBAACHGDBNGFE@AE@CGPIBA@AC@CDA@BCAEBEDAFDLGBCCCCAEBCEDIF@BCMIMC_AECK@KCW@YA@JIJ]XCDAFKFBDFHBHBDHF@PELGVGHGDAJCD@BBBHBADGHA@ECIKeSYYKIKEe_QC]BEAACCAKAS@GCTCNIDKLGJA\\@JBXAlOHBnBDCBC@OFADE@QAGEEBILaPW\\M^GJEtoNI~@FC^qÓNME@ECC@MGA@AACGBCACBKCC@ECCKIOCGGICCCQIGEE@AACEAII@ICKIAEBGSDEFGDIBCAGFC@PMRIHKBA[]AGFW@GICIACG@IBYDMHOCGAAJKB@FDXRD@HIPAPBN@LHPFLBPCLIDI@MDMDAFBJFDP@PDPFD\\HHF@HDBTDDDBDALDDLFJFPRJNCHLFJJ@J]\\KRJFD@FADEFAFDLBPNJD@B@JDBL@FABQjY@GIABIJ@LGDS`SAWJK[W@GJEPFNI\\DrcF[C_dWV[\\UGcTkz{B_X[BYZKhiBIKYHMDU^QFBXPZDVAJID@AH@V@NDHFB^FJAREFCD@NL@H@DDDJCVIDMBAPHLBPADGNSFAVA^LzRRDP@FFBD@DGHJDF@NATCNJJ@FCBDTH@B@JDBNSFAFABCBO@ECC@EA@@KDEDCL@FEFABCBEHC@CNEM@QEM@@ABAJCHIAECAAIO@EEKFQASFCBADSPWJ@ADCACAGEIDGEGEDIJC@INKFEHC@CBA@BEEA@ETY@QXGNFN@JCJM@EJCJEDICAAEIE@A"],
                "encodeOffsets": [[108966, 37393]]
            },
            "properties": {"cp": [105.189568, 37.514951], "name": "中卫市", "childNum": 1}
        }],
        "UTF8Encoding": true
    });
}));
