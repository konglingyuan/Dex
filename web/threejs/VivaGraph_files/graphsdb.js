/*global window*/

window.graphsDb = {};

window.graphsDb.favGraphs = [
'HB/blckhole',
'Bai/rw5151',
'HB/bcsstm13',
'HB/jagmesh6',
'HB/watt_1',
'HB/lshp1882',
'HB/plat1919',
'HB/bcsstk26',
'HB/bcsstm26',
'Bai/tols2000',
'Bai/dw1024',
'Bai/rdb2048',
'Pajek/CSphd',
'GHS_indef/laser'
];

window.graphsDb.graphsCollection = ['Bai/bfwa398',
'Bai/bfwa62',
'Bai/bfwb398',
'Bai/bfwb62',
'Bai/bfwb782',
'Bai/bwm200',
'Bai/cdde1',
'Bai/cdde2',
'Bai/cdde3',
'Bai/cdde4',
'Bai/cdde5',
'Bai/cdde6',
'Bai/ck104',
'Bai/ck400',
'Bai/ck656',
'Bai/dw256A',
'Bai/dw256B',
'Bai/dwa512',
'Bai/dwb512',
'Bai/dwg961a',
'Bai/lop163',
'Bai/mhdb416',
'Bai/odepa400',
'Bai/odepb400',
'Bai/olm100',
'Bai/olm1000',
'Bai/olm500',
'Bai/pde225',
'Bai/pde900',
'Bai/qh1484',
'Bai/qh768',
'Bai/qh882',
'Bai/rdb1250',
'Bai/rdb1250l',
'Bai/rdb200',
'Bai/rdb200l',
'Bai/rdb450',
'Bai/rdb450l',
'Bai/rdb800l',
'Bai/rdb968',
'Bai/rw136',
'Bai/rw496',
'Bai/tols1090',
'Bai/tols2000',
'Bai/tols340',
'Bai/tols90',
'Bai/tub100',
'Bai/tub1000',
'Barabasi/NotreDame_yeast',
'Bates/Chem97ZtZ',
'FEMLAB/poisson2D',
'FEMLAB/problem1',
'FIDAP/ex1',
'FIDAP/ex5',
'GHS_indef/laser',
'Grund/b1_ss',
'Grund/b2_ss',
'Grund/b_dyn',
'Grund/d_dyn',
'Grund/d_dyn1',
'Grund/d_ss',
'Grund/poli',
'Gset/G11',
'Gset/G12',
'Gset/G13',
'Gset/G14',
'Gset/G15',
'Gset/G16',
'Gset/G17',
'Gset/G18',
'Gset/G19',
'Gset/G20',
'Gset/G21',
'Gset/G32',
'Gset/G33',
'Gset/G34',
'Gset/G35',
'Gset/G36',
'Gset/G37',
'Gset/G38',
'Gset/G39',
'Gset/G40',
'Gset/G41',
'Gset/G42',
'Gset/G43',
'Gset/G44',
'Gset/G45',
'Gset/G46',
'Gset/G47',
'Gset/G48',
'Gset/G49',
'Gset/G50',
'Gset/G51',
'Gset/G52',
'Gset/G53',
'Gset/G54',
'Gset/G55',
'Gset/G57',
'Hamrle/Hamrle1',
'HB/1138_bus',
'HB/494_bus',
'HB/662_bus',
'HB/685_bus',
'HB/abb313',
'HB/arc130',
'HB/ash219',
'HB/ash292',
'HB/ash331',
'HB/ash608',
'HB/ash85',
'HB/ash958',
'HB/bcspwr01',
'HB/bcspwr02',
'HB/bcspwr03',
'HB/bcspwr04',
'HB/bcspwr05',
'HB/bcspwr06',
'HB/bcspwr07',
'HB/bcspwr08',
'HB/bcspwr09',
'HB/bcsstk01',
'HB/bcsstk02',
'HB/bcsstk03',
'HB/bcsstk04',
'HB/bcsstk05',
'HB/bcsstk06',
'HB/bcsstk07',
'HB/bcsstk19',
'HB/bcsstk20',
'HB/bcsstk22',
'HB/bcsstm01',
'HB/bcsstm02',
'HB/bcsstm03',
'HB/bcsstm04',
'HB/bcsstm05',
'HB/bcsstm06',
'HB/bcsstm07',
'HB/bcsstm08',
'HB/bcsstm09',
'HB/bcsstm11',
'HB/bcsstm19',
'HB/bcsstm20',
'HB/bcsstm21',
'HB/bcsstm22',
'HB/bcsstm23',
'HB/bcsstm24',
'HB/bcsstm26',
'HB/blckhole',
'HB/bp_0',
'HB/bp_1000',
'HB/bp_1200',
'HB/bp_1400',
'HB/bp_1600',
'HB/bp_200',
'HB/bp_400',
'HB/bp_600',
'HB/bp_800',
'HB/can_1054',
'HB/can_1072',
'HB/can_144',
'HB/can_161',
'HB/can_187',
'HB/can_229',
'HB/can_24',
'HB/can_256',
'HB/can_268',
'HB/can_292',
'HB/can_445',
'HB/can_61',
'HB/can_62',
'HB/can_634',
'HB/can_715',
'HB/can_73',
'HB/can_838',
'HB/can_96',
'HB/curtis54',
'HB/dwt_1005',
'HB/dwt_1007',
'HB/dwt_1242',
'HB/dwt_162',
'HB/dwt_193',
'HB/dwt_198',
'HB/dwt_209',
'HB/dwt_221',
'HB/dwt_234',
'HB/dwt_245',
'HB/dwt_2680',
'HB/dwt_307',
'HB/dwt_310',
'HB/dwt_346',
'HB/dwt_361',
'HB/dwt_419',
'HB/dwt_492',
'HB/dwt_503',
'HB/dwt_512',
'HB/dwt_59',
'HB/dwt_592',
'HB/dwt_607',
'HB/dwt_66',
'HB/dwt_72',
'HB/dwt_758',
'HB/dwt_869',
'HB/dwt_87',
'HB/dwt_878',
'HB/dwt_918',
'HB/dwt_992',
'HB/eris1176',
'HB/fs_183_1',
'HB/fs_183_3',
'HB/fs_183_4',
'HB/fs_183_6',
'HB/fs_541_1',
'HB/fs_541_2',
'HB/fs_541_3',
'HB/fs_541_4',
'HB/fs_680_1',
'HB/fs_680_2',
'HB/fs_680_3',
'HB/gent113',
'HB/gr_30_30',
'HB/gre_1107',
'HB/gre_115',
'HB/gre_185',
'HB/gre_216a',
'HB/gre_216b',
'HB/gre_343',
'HB/gre_512',
'HB/hor_131',
'HB/ibm32',
'HB/illc1033',
'HB/impcol_a',
'HB/impcol_b',
'HB/impcol_c',
'HB/impcol_d',
'HB/impcol_e',
'HB/jagmesh1',
'HB/jagmesh2',
'HB/jagmesh3',
'HB/jagmesh4',
'HB/jagmesh5',
'HB/jagmesh6',
'HB/jagmesh7',
'HB/jagmesh8',
'HB/jagmesh9',
'HB/jgl009',
'HB/jgl011',
'HB/jpwh_991',
'HB/lap_25',
'HB/lns_131',
'HB/lns_511',
'HB/lnsp_131',
'HB/lnsp_511',
'HB/lock_700',
'HB/lshp1009',
'HB/lshp1270',
'HB/lshp1561',
'HB/lshp1882',
'HB/lshp2233',
'HB/lshp2614',
'HB/lshp3025',
'HB/lshp3466',
'HB/lshp_265',
'HB/lshp_406',
'HB/lshp_577',
'HB/lshp_778',
'HB/lund_a',
'HB/lund_b',
'HB/mcca',
'HB/nnc261',
'HB/nnc666',
'HB/nos1',
'HB/nos2',
'HB/nos4',
'HB/nos5',
'HB/nos6',
'HB/nos7',
'HB/orsirr_1',
'HB/orsirr_2',
'HB/plat362',
'HB/plskz362',
'HB/pores_1',
'HB/pores_3',
'HB/rgg010',
'HB/saylr1',
'HB/saylr3',
'HB/sherman1',
'HB/sherman4',
'HB/shl_0',
'HB/shl_200',
'HB/shl_400',
'HB/sstmodel',
'HB/steam1',
'HB/steam3',
'HB/str_0',
'HB/str_200',
'HB/str_400',
'HB/str_600',
'HB/well1033',
'HB/west0067',
'HB/west0132',
'HB/west0156',
'HB/west0167',
'HB/west0381',
'HB/west0479',
'HB/west0497',
'HB/west0655',
'HB/west0989',
'HB/west1505',
'HB/west2021',
'HB/will199',
'HB/will57',
'HB/wm1',
'HB/wm2',
'HB/wm3',
'HB/young1c',
'HB/young2c',
'HB/young3c',
'HB/young4c',
'JGD_BIBD/bibd_11_5',
'JGD_BIBD/bibd_12_4',
'JGD_BIBD/bibd_12_5',
'JGD_BIBD/bibd_15_3',
'JGD_BIBD/bibd_17_3',
'JGD_BIBD/bibd_17_4',
'JGD_BIBD/bibd_17_4b',
'JGD_BIBD/bibd_81_2',
'JGD_BIBD/bibd_9_3',
'JGD_BIBD/bibd_9_5',
'JGD_CAG/CAG_mat364',
'JGD_CAG/CAG_mat72',
'JGD_Forest/TF10',
'JGD_Forest/TF11',
'JGD_Forest/TF12',
'JGD_Forest/TF13',
'JGD_Franz/Franz1',
'JGD_Franz/Franz3',
'JGD_G5/IG5-10',
'JGD_G5/IG5-6',
'JGD_G5/IG5-7',
'JGD_G5/IG5-8',
'JGD_G5/IG5-9',
'JGD_GL6/GL6_D_10',
'JGD_GL6/GL6_D_6',
'JGD_GL6/GL6_D_7',
'JGD_GL6/GL6_D_8',
'JGD_GL6/GL6_D_9',
'JGD_GL7d/GL7d10',
'JGD_GL7d/GL7d11',
'JGD_GL7d/GL7d26',
'JGD_Homology/ch3-3-b1',
'JGD_Homology/ch3-3-b2',
'JGD_Homology/ch4-4-b1',
'JGD_Homology/ch4-4-b2',
'JGD_Homology/ch4-4-b3',
'JGD_Homology/ch5-5-b1',
'JGD_Homology/ch5-5-b2',
'JGD_Homology/ch5-5-b3',
'JGD_Homology/ch5-5-b4',
'JGD_Homology/ch6-6-b1',
'JGD_Homology/ch6-6-b2',
'JGD_Homology/ch6-6-b5',
'JGD_Homology/ch7-6-b1',
'JGD_Homology/ch7-7-b1',
'JGD_Homology/ch7-8-b1',
'JGD_Homology/ch7-9-b1',
'JGD_Homology/ch8-8-b1',
'JGD_Homology/cis-n4c6-b1',
'JGD_Homology/cis-n4c6-b15',
'JGD_Homology/cis-n4c6-b2',
'JGD_Homology/klein-b1',
'JGD_Homology/klein-b2',
'JGD_Homology/mk10-b1',
'JGD_Homology/mk10-b2',
'JGD_Homology/mk10-b4',
'JGD_Homology/mk11-b1',
'JGD_Homology/mk12-b1',
'JGD_Homology/mk9-b1',
'JGD_Homology/mk9-b2',
'JGD_Homology/mk9-b3',
'JGD_Homology/n2c6-b1',
'JGD_Homology/n2c6-b10',
'JGD_Homology/n2c6-b2',
'JGD_Homology/n2c6-b3',
'JGD_Homology/n2c6-b9',
'JGD_Homology/n3c4-b1',
'JGD_Homology/n3c4-b2',
'JGD_Homology/n3c4-b3',
'JGD_Homology/n3c4-b4',
'JGD_Homology/n3c5-b1',
'JGD_Homology/n3c5-b2',
'JGD_Homology/n3c5-b3',
'JGD_Homology/n3c5-b4',
'JGD_Homology/n3c5-b5',
'JGD_Homology/n3c5-b6',
'JGD_Homology/n3c5-b7',
'JGD_Homology/n3c6-b1',
'JGD_Homology/n3c6-b10',
'JGD_Homology/n3c6-b11',
'JGD_Homology/n3c6-b2',
'JGD_Homology/n3c6-b3',
'JGD_Homology/n4c5-b1',
'JGD_Homology/n4c5-b10',
'JGD_Homology/n4c5-b11',
'JGD_Homology/n4c5-b2',
'JGD_Homology/n4c5-b3',
'JGD_Homology/n4c5-b9',
'JGD_Homology/n4c6-b1',
'JGD_Homology/n4c6-b15',
'JGD_Homology/n4c6-b2',
'JGD_Kocay/Trec10',
'JGD_Kocay/Trec3',
'JGD_Kocay/Trec4',
'JGD_Kocay/Trec5',
'JGD_Kocay/Trec6',
'JGD_Kocay/Trec7',
'JGD_Kocay/Trec8',
'JGD_Kocay/Trec9',
'JGD_Margulies/cat_ears_2_1',
'JGD_Margulies/cat_ears_2_4',
'JGD_Margulies/cat_ears_3_1',
'JGD_Margulies/cat_ears_4_1',
'JGD_Margulies/flower_4_1',
'JGD_Margulies/flower_5_1',
'JGD_Margulies/flower_7_1',
'JGD_Margulies/flower_8_1',
'JGD_Margulies/kneser_6_2_1',
'JGD_Margulies/wheel_3_1',
'JGD_Margulies/wheel_4_1',
'JGD_Margulies/wheel_5_1',
'JGD_Margulies/wheel_6_1',
'JGD_Margulies/wheel_7_1',
'JGD_Relat/rel3',
'JGD_Relat/rel4',
'JGD_Relat/rel5',
'JGD_Relat/rel6',
'JGD_Relat/relat3',
'JGD_Relat/relat4',
'JGD_Relat/relat5',
'JGD_Relat/relat6',
'JGD_SL6/D_10',
'JGD_SL6/D_11',
'JGD_SL6/D_5',
'JGD_SL6/D_6',
'JGD_SPG/08blocks',
'JGD_SPG/EX1',
'JGD_SPG/EX2',
'JGD_Trefethen/Trefethen_150',
'JGD_Trefethen/Trefethen_20',
'JGD_Trefethen/Trefethen_200',
'JGD_Trefethen/Trefethen_200b',
'JGD_Trefethen/Trefethen_20b',
'JGD_Trefethen/Trefethen_300',
'JGD_Trefethen/Trefethen_500',
'JGD_Trefethen/Trefethen_700',
'LPnetlib/lp_adlittle',
'LPnetlib/lp_afiro',
'LPnetlib/lp_agg',
'LPnetlib/lp_agg2',
'LPnetlib/lp_agg3',
'LPnetlib/lp_bandm',
'LPnetlib/lp_beaconfd',
'LPnetlib/lp_blend',
'LPnetlib/lp_bnl1',
'LPnetlib/lp_bore3d',
'LPnetlib/lp_brandy',
'LPnetlib/lp_capri',
'LPnetlib/lp_czprob',
'LPnetlib/lp_degen2',
'LPnetlib/lp_e226',
'LPnetlib/lp_etamacro',
'LPnetlib/lp_fffff800',
'LPnetlib/lp_finnis',
'LPnetlib/lp_fit1p',
'LPnetlib/lp_ganges',
'LPnetlib/lp_gfrd_pnc',
'LPnetlib/lp_grow15',
'LPnetlib/lp_grow7',
'LPnetlib/lp_israel',
'LPnetlib/lp_kb2',
'LPnetlib/lp_ken_07',
'LPnetlib/lp_lotfi',
'LPnetlib/lp_modszk1',
'LPnetlib/lp_perold',
'LPnetlib/lp_pilot4',
'LPnetlib/lp_qap8',
'LPnetlib/lp_recipe',
'LPnetlib/lp_sc105',
'LPnetlib/lp_sc205',
'LPnetlib/lp_sc50a',
'LPnetlib/lp_sc50b',
'LPnetlib/lp_scagr25',
'LPnetlib/lp_scagr7',
'LPnetlib/lp_scfxm1',
'LPnetlib/lp_scfxm2',
'LPnetlib/lp_scfxm3',
'LPnetlib/lp_scorpion',
'LPnetlib/lp_scrs8',
'LPnetlib/lp_scsd1',
'LPnetlib/lp_scsd6',
'LPnetlib/lp_sctap1',
'LPnetlib/lp_sctap2',
'LPnetlib/lp_sctap3',
'LPnetlib/lp_share1b',
'LPnetlib/lp_share2b',
'LPnetlib/lp_shell',
'LPnetlib/lp_ship04l',
'LPnetlib/lp_ship04s',
'LPnetlib/lp_ship08s',
'LPnetlib/lp_ship12s',
'LPnetlib/lp_sierra',
'LPnetlib/lp_stair',
'LPnetlib/lp_standata',
'LPnetlib/lp_standgub',
'LPnetlib/lp_standmps',
'LPnetlib/lp_stocfor1',
'LPnetlib/lp_tuff',
'LPnetlib/lp_vtp_base',
'LPnetlib/lpi_bgdbg1',
'LPnetlib/lpi_bgetam',
'LPnetlib/lpi_bgprtr',
'LPnetlib/lpi_box1',
'LPnetlib/lpi_chemcom',
'LPnetlib/lpi_cplex2',
'LPnetlib/lpi_ex72a',
'LPnetlib/lpi_ex73a',
'LPnetlib/lpi_forest6',
'LPnetlib/lpi_galenet',
'LPnetlib/lpi_itest2',
'LPnetlib/lpi_itest6',
'LPnetlib/lpi_klein1',
'LPnetlib/lpi_klein2',
'LPnetlib/lpi_mondou2',
'LPnetlib/lpi_pang',
'LPnetlib/lpi_pilot4i',
'LPnetlib/lpi_qual',
'LPnetlib/lpi_reactor',
'LPnetlib/lpi_refinery',
'LPnetlib/lpi_vol1',
'LPnetlib/lpi_woodinfe',
'MathWorks/Harvard500',
'MathWorks/Pd_rhs',
'MathWorks/pivtol',
'MathWorks/QRpivot',
'Meszaros/cep1',
'Meszaros/cr42',
'Meszaros/de063155',
'Meszaros/de063157',
'Meszaros/de080285',
'Meszaros/farm',
'Meszaros/gams10a',
'Meszaros/gams10am',
'Meszaros/gams30a',
'Meszaros/gams30am',
'Meszaros/gams60am',
'Meszaros/gas11',
'Meszaros/iiasa',
'Meszaros/iprob',
'Meszaros/kleemin',
'Meszaros/l9',
'Meszaros/model1',
'Meszaros/model2',
'Meszaros/nemsafm',
'Meszaros/nemscem',
'Meszaros/nsic',
'Meszaros/p0033',
'Meszaros/p0040',
'Meszaros/p0201',
'Meszaros/p0282',
'Meszaros/p0291',
'Meszaros/p0548',
'Meszaros/p2756',
'Meszaros/problem',
'Meszaros/qiulp',
'Meszaros/refine',
'Meszaros/rosen7',
'Meszaros/scagr7-2c',
'Meszaros/scrs8-2b',
'Meszaros/scrs8-2c',
'Meszaros/small',
'Meszaros/zed',
'Morandini/robot',
'Morandini/rotor1',
'Muite/Chebyshev1',
'NYPA/Maragal_1',
'NYPA/Maragal_2',
'Oberwolfach/LF10',
'Oberwolfach/LFAT5',
'Pajek/Cities',
'Pajek/CSphd',
'Pajek/divorce',
'Pajek/EPA',
'Pajek/Erdos02',
'Pajek/Erdos971',
'Pajek/Erdos972',
'Pajek/Erdos981',
'Pajek/Erdos982',
'Pajek/Erdos991',
'Pajek/Erdos992',
'Pajek/EVA',
'Pajek/football',
'Pajek/GD00_a',
'Pajek/GD00_c',
'Pajek/GD01_a',
'Pajek/GD01_A',
'Pajek/GD01_b',
'Pajek/GD01_c',
'Pajek/GD02_a',
'Pajek/GD02_b',
'Pajek/GD06_Java',
'Pajek/GD06_theory',
'Pajek/GD95_a',
'Pajek/GD95_b',
'Pajek/GD95_c',
'Pajek/GD96_a',
'Pajek/GD96_b',
'Pajek/GD96_c',
'Pajek/GD96_d',
'Pajek/GD97_a',
'Pajek/GD97_b',
'Pajek/GD97_c',
'Pajek/GD98_a',
'Pajek/GD98_b',
'Pajek/GD98_c',
'Pajek/GD99_b',
'Pajek/GD99_c',
'Pajek/GlossGT',
'Pajek/Journals',
'Pajek/Kohonen',
'Pajek/Ragusa16',
'Pajek/Ragusa18',
'Pajek/Roget',
'Pajek/Sandi_authors',
'Pajek/Sandi_sandi',
'Pajek/SciMet',
'Pajek/SmaGri',
'Pajek/SmallW',
'Pajek/Stranke94',
'Pajek/Tina_AskCal',
'Pajek/Tina_AskCog',
'Pajek/Tina_DisCal',
'Pajek/Tina_DisCog',
'Pajek/USAir97',
'Pajek/USpowerGrid',
'Pajek/WorldCities',
'Pajek/yeast',
'Pothen/mesh1e1',
'Pothen/mesh1em1',
'Pothen/mesh1em6',
'Pothen/mesh2e1',
'Pothen/mesh2em5',
'Pothen/mesh3e1',
'Pothen/mesh3em5',
'Pothen/sphere2',
'Pothen/sphere3',
'Qaplib/lp_nug05',
'Qaplib/lp_nug06',
'Qaplib/lp_nug07',
'Qaplib/lp_nug08',
'Rajat/rajat02',
'Rajat/rajat05',
'Rajat/rajat11',
'Rajat/rajat14',
'Rajat/rajat19',
'Sandia/oscil_dcop_01',
'Sandia/oscil_dcop_02',
'Sandia/oscil_dcop_03',
'Sandia/oscil_dcop_04',
'Sandia/oscil_dcop_05',
'Sandia/oscil_dcop_06',
'Sandia/oscil_dcop_07',
'Sandia/oscil_dcop_08',
'Sandia/oscil_dcop_09',
'Sandia/oscil_dcop_10',
'Sandia/oscil_dcop_11',
'Sandia/oscil_dcop_12',
'Sandia/oscil_dcop_13',
'Sandia/oscil_dcop_14',
'Sandia/oscil_dcop_15',
'Sandia/oscil_dcop_16',
'Sandia/oscil_dcop_17',
'Sandia/oscil_dcop_18',
'Sandia/oscil_dcop_19',
'Sandia/oscil_dcop_20',
'Sandia/oscil_dcop_21',
'Sandia/oscil_dcop_22',
'Sandia/oscil_dcop_23',
'Sandia/oscil_dcop_24',
'Sandia/oscil_dcop_25',
'Sandia/oscil_dcop_26',
'Sandia/oscil_dcop_27',
'Sandia/oscil_dcop_28',
'Sandia/oscil_dcop_29',
'Sandia/oscil_dcop_30',
'Sandia/oscil_dcop_31',
'Sandia/oscil_dcop_32',
'Sandia/oscil_dcop_33',
'Sandia/oscil_dcop_34',
'Sandia/oscil_dcop_35',
'Sandia/oscil_dcop_36',
'Sandia/oscil_dcop_37',
'Sandia/oscil_dcop_38',
'Sandia/oscil_dcop_39',
'Sandia/oscil_dcop_40',
'Sandia/oscil_dcop_41',
'Sandia/oscil_dcop_42',
'Sandia/oscil_dcop_43',
'Sandia/oscil_dcop_44',
'Sandia/oscil_dcop_45',
'Sandia/oscil_dcop_46',
'Sandia/oscil_dcop_47',
'Sandia/oscil_dcop_48',
'Sandia/oscil_dcop_49',
'Sandia/oscil_dcop_50',
'Sandia/oscil_dcop_51',
'Sandia/oscil_dcop_52',
'Sandia/oscil_dcop_53',
'Sandia/oscil_dcop_54',
'Sandia/oscil_dcop_55',
'Sandia/oscil_dcop_56',
'Sandia/oscil_dcop_57',
'Sandia/oscil_trans_01',
'TOKAMAK/utm300',
'vanHeukelum/cage3',
'vanHeukelum/cage4',
'vanHeukelum/cage5',
'vanHeukelum/cage6',
'vanHeukelum/cage7',
'YZhou/circuit204'];