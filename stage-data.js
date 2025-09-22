// 各ステージの固定問題データ
const STAGE_DATA = {
    1: [
        { baseColor: 'hsl(180, 70%, 60%)', diffColor: 'hsl(182, 70%, 60%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(45, 80%, 65%)', diffColor: 'hsl(45, 77%, 65%)', pattern: 'saturation', correctIndex: 2 },
        { baseColor: 'hsl(270, 60%, 50%)', diffColor: 'hsl(272, 60%, 50%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(120, 70%, 55%)', diffColor: 'hsl(120, 70%, 57%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(0, 75%, 60%)', diffColor: 'hsl(2, 74%, 59%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(210, 65%, 45%)', diffColor: 'hsl(212, 65%, 45%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(300, 55%, 70%)', diffColor: 'hsl(301, 54%, 69%)', pattern: 'mixed', correctIndex: 0 }
    ],
    2: [
        { baseColor: 'hsl(90, 65%, 55%)', diffColor: 'hsl(92, 65%, 55%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(240, 75%, 65%)', diffColor: 'hsl(240, 73%, 65%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(30, 80%, 60%)', diffColor: 'hsl(30, 80%, 58%)', pattern: 'lightness', correctIndex: 0 },
        { baseColor: 'hsl(150, 60%, 50%)', diffColor: 'hsl(152, 60%, 50%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(330, 70%, 55%)', diffColor: 'hsl(331, 69%, 56%)', pattern: 'mixed', correctIndex: 0 },
        { baseColor: 'hsl(60, 85%, 70%)', diffColor: 'hsl(60, 83%, 70%)', pattern: 'saturation', correctIndex: 3 },
        { baseColor: 'hsl(195, 55%, 40%)', diffColor: 'hsl(196, 56%, 41%)', pattern: 'mixed', correctIndex: 1 }
    ],
    3: [
        { baseColor: 'hsl(15, 75%, 55%)', diffColor: 'hsl(17, 75%, 55%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(165, 60%, 45%)', diffColor: 'hsl(165, 60%, 47%)', pattern: 'lightness', correctIndex: 0 },
        { baseColor: 'hsl(285, 65%, 60%)', diffColor: 'hsl(285, 63%, 60%)', pattern: 'saturation', correctIndex: 3 },
        { baseColor: 'hsl(105, 70%, 50%)', diffColor: 'hsl(106, 69%, 51%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(225, 80%, 65%)', diffColor: 'hsl(227, 80%, 65%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(345, 55%, 55%)', diffColor: 'hsl(345, 55%, 53%)', pattern: 'lightness', correctIndex: 2 },
        { baseColor: 'hsl(75, 75%, 60%)', diffColor: 'hsl(76, 74%, 59%)', pattern: 'mixed', correctIndex: 0 }
    ],
    4: [
        { baseColor: 'hsl(135, 70%, 55%)', diffColor: 'hsl(137, 70%, 55%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(255, 65%, 50%)', diffColor: 'hsl(255, 63%, 50%)', pattern: 'saturation', correctIndex: 2 },
        { baseColor: 'hsl(315, 60%, 65%)', diffColor: 'hsl(316, 61%, 66%)', pattern: 'mixed', correctIndex: 0 },
        { baseColor: 'hsl(45, 85%, 70%)', diffColor: 'hsl(45, 85%, 68%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(180, 55%, 45%)', diffColor: 'hsl(182, 55%, 45%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(0, 80%, 60%)', diffColor: 'hsl(0, 78%, 60%)', pattern: 'saturation', correctIndex: 2 },
        { baseColor: 'hsl(120, 65%, 55%)', diffColor: 'hsl(121, 66%, 54%)', pattern: 'mixed', correctIndex: 3 }
    ],
    5: [
        { baseColor: 'hsl(210, 75%, 60%)', diffColor: 'hsl(212, 75%, 60%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(60, 70%, 65%)', diffColor: 'hsl(60, 70%, 63%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(330, 65%, 50%)', diffColor: 'hsl(331, 64%, 51%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(150, 80%, 55%)', diffColor: 'hsl(150, 78%, 55%)', pattern: 'saturation', correctIndex: 2 },
        { baseColor: 'hsl(270, 55%, 60%)', diffColor: 'hsl(272, 55%, 60%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(90, 75%, 70%)', diffColor: 'hsl(91, 76%, 71%)', pattern: 'mixed', correctIndex: 2 },
        { baseColor: 'hsl(195, 60%, 40%)', diffColor: 'hsl(195, 60%, 42%)', pattern: 'lightness', correctIndex: 1 }
    ],
    6: [
        { baseColor: 'hsl(30, 65%, 55%)', diffColor: 'hsl(32, 65%, 55%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(240, 70%, 65%)', diffColor: 'hsl(240, 68%, 65%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(120, 60%, 50%)', diffColor: 'hsl(120, 60%, 52%)', pattern: 'lightness', correctIndex: 1 },
        { baseColor: 'hsl(300, 75%, 60%)', diffColor: 'hsl(301, 74%, 59%)', pattern: 'mixed', correctIndex: 3 },
        { baseColor: 'hsl(165, 55%, 45%)', diffColor: 'hsl(167, 55%, 45%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(15, 80%, 65%)', diffColor: 'hsl(15, 78%, 65%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(225, 65%, 55%)', diffColor: 'hsl(226, 66%, 54%)', pattern: 'mixed', correctIndex: 0 }
    ],
    7: [
        { baseColor: 'hsl(75, 70%, 60%)', diffColor: 'hsl(77, 70%, 60%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(285, 60%, 50%)', diffColor: 'hsl(285, 60%, 48%)', pattern: 'lightness', correctIndex: 1 },
        { baseColor: 'hsl(345, 75%, 55%)', diffColor: 'hsl(345, 73%, 55%)', pattern: 'saturation', correctIndex: 2 },
        { baseColor: 'hsl(105, 65%, 65%)', diffColor: 'hsl(106, 64%, 66%)', pattern: 'mixed', correctIndex: 0 },
        { baseColor: 'hsl(255, 80%, 70%)', diffColor: 'hsl(257, 80%, 70%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(135, 55%, 40%)', diffColor: 'hsl(136, 56%, 41%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(45, 85%, 75%)', diffColor: 'hsl(45, 85%, 73%)', pattern: 'lightness', correctIndex: 2 }
    ],
    8: [
        { baseColor: 'hsl(315, 65%, 60%)', diffColor: 'hsl(317, 65%, 60%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(180, 75%, 55%)', diffColor: 'hsl(180, 73%, 55%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(60, 60%, 45%)', diffColor: 'hsl(61, 61%, 44%)', pattern: 'mixed', correctIndex: 2 },
        { baseColor: 'hsl(0, 70%, 65%)', diffColor: 'hsl(0, 70%, 63%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(150, 85%, 70%)', diffColor: 'hsl(152, 85%, 70%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(210, 55%, 50%)', diffColor: 'hsl(210, 53%, 50%)', pattern: 'saturation', correctIndex: 2 },
        { baseColor: 'hsl(270, 65%, 55%)', diffColor: 'hsl(271, 64%, 56%)', pattern: 'mixed', correctIndex: 1 }
    ],
    9: [
        { baseColor: 'hsl(90, 80%, 65%)', diffColor: 'hsl(92, 80%, 65%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(330, 60%, 50%)', diffColor: 'hsl(330, 60%, 52%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(195, 70%, 60%)', diffColor: 'hsl(196, 69%, 61%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(15, 75%, 55%)', diffColor: 'hsl(15, 73%, 55%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(240, 55%, 45%)', diffColor: 'hsl(242, 55%, 45%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(120, 65%, 70%)', diffColor: 'hsl(121, 66%, 71%)', pattern: 'mixed', correctIndex: 2 },
        { baseColor: 'hsl(285, 85%, 75%)', diffColor: 'hsl(285, 85%, 73%)', pattern: 'lightness', correctIndex: 0 }
    ],
    10: [
        { baseColor: 'hsl(165, 70%, 55%)', diffColor: 'hsl(167, 70%, 55%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(30, 60%, 60%)', diffColor: 'hsl(30, 58%, 60%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(225, 75%, 65%)', diffColor: 'hsl(225, 75%, 63%)', pattern: 'lightness', correctIndex: 2 },
        { baseColor: 'hsl(345, 65%, 50%)', diffColor: 'hsl(346, 64%, 51%)', pattern: 'mixed', correctIndex: 3 },
        { baseColor: 'hsl(105, 80%, 60%)', diffColor: 'hsl(107, 80%, 60%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(255, 55%, 55%)', diffColor: 'hsl(256, 56%, 54%)', pattern: 'mixed', correctIndex: 0 },
        { baseColor: 'hsl(75, 85%, 70%)', diffColor: 'hsl(75, 83%, 70%)', pattern: 'saturation', correctIndex: 3 }
    ],
    11: [
        { baseColor: 'hsl(135, 65%, 60%)', diffColor: 'hsl(137, 65%, 60%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(300, 70%, 55%)', diffColor: 'hsl(300, 70%, 57%)', pattern: 'lightness', correctIndex: 2 },
        { baseColor: 'hsl(45, 60%, 50%)', diffColor: 'hsl(45, 58%, 50%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(180, 75%, 65%)', diffColor: 'hsl(181, 74%, 66%)', pattern: 'mixed', correctIndex: 0 },
        { baseColor: 'hsl(210, 80%, 70%)', diffColor: 'hsl(212, 80%, 70%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(0, 55%, 45%)', diffColor: 'hsl(1, 56%, 44%)', pattern: 'mixed', correctIndex: 3 },
        { baseColor: 'hsl(120, 85%, 75%)', diffColor: 'hsl(120, 85%, 73%)', pattern: 'lightness', correctIndex: 1 }
    ],
    12: [
        { baseColor: 'hsl(270, 75%, 60%)', diffColor: 'hsl(272, 75%, 60%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(60, 65%, 55%)', diffColor: 'hsl(60, 63%, 55%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(150, 70%, 65%)', diffColor: 'hsl(151, 71%, 64%)', pattern: 'mixed', correctIndex: 2 },
        { baseColor: 'hsl(315, 60%, 50%)', diffColor: 'hsl(315, 60%, 52%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(195, 80%, 45%)', diffColor: 'hsl(197, 80%, 45%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(90, 55%, 60%)', diffColor: 'hsl(90, 53%, 60%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(15, 65%, 70%)', diffColor: 'hsl(16, 64%, 71%)', pattern: 'mixed', correctIndex: 2 }
    ],
    13: [
        { baseColor: 'hsl(330, 70%, 60%)', diffColor: 'hsl(332, 70%, 60%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(165, 60%, 50%)', diffColor: 'hsl(165, 60%, 48%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(225, 65%, 55%)', diffColor: 'hsl(226, 64%, 56%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(105, 75%, 65%)', diffColor: 'hsl(105, 73%, 65%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(240, 80%, 70%)', diffColor: 'hsl(242, 80%, 70%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(30, 55%, 45%)', diffColor: 'hsl(30, 55%, 47%)', pattern: 'lightness', correctIndex: 0 },
        { baseColor: 'hsl(285, 70%, 60%)', diffColor: 'hsl(286, 69%, 59%)', pattern: 'mixed', correctIndex: 2 }
    ],
    14: [
        { baseColor: 'hsl(75, 65%, 55%)', diffColor: 'hsl(77, 65%, 55%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(345, 70%, 65%)', diffColor: 'hsl(345, 68%, 65%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(120, 60%, 50%)', diffColor: 'hsl(121, 61%, 51%)', pattern: 'mixed', correctIndex: 3 },
        { baseColor: 'hsl(255, 75%, 60%)', diffColor: 'hsl(255, 75%, 58%)', pattern: 'lightness', correctIndex: 2 },
        { baseColor: 'hsl(135, 80%, 70%)', diffColor: 'hsl(137, 80%, 70%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(180, 55%, 45%)', diffColor: 'hsl(181, 56%, 44%)', pattern: 'mixed', correctIndex: 0 },
        { baseColor: 'hsl(300, 85%, 75%)', diffColor: 'hsl(300, 83%, 75%)', pattern: 'saturation', correctIndex: 3 }
    ],
    15: [
        { baseColor: 'hsl(210, 70%, 60%)', diffColor: 'hsl(212, 70%, 60%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(45, 60%, 55%)', diffColor: 'hsl(45, 60%, 53%)', pattern: 'lightness', correctIndex: 2 },
        { baseColor: 'hsl(315, 75%, 65%)', diffColor: 'hsl(315, 73%, 65%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(90, 65%, 50%)', diffColor: 'hsl(91, 64%, 51%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(270, 80%, 70%)', diffColor: 'hsl(272, 80%, 70%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(150, 55%, 45%)', diffColor: 'hsl(151, 56%, 46%)', pattern: 'mixed', correctIndex: 3 },
        { baseColor: 'hsl(0, 85%, 75%)', diffColor: 'hsl(0, 85%, 73%)', pattern: 'lightness', correctIndex: 1 }
    ],
    16: [
        { baseColor: 'hsl(195, 65%, 55%)', diffColor: 'hsl(197, 65%, 55%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(60, 70%, 60%)', diffColor: 'hsl(60, 68%, 60%)', pattern: 'saturation', correctIndex: 2 },
        { baseColor: 'hsl(330, 60%, 50%)', diffColor: 'hsl(331, 59%, 49%)', pattern: 'mixed', correctIndex: 0 },
        { baseColor: 'hsl(165, 75%, 65%)', diffColor: 'hsl(165, 75%, 63%)', pattern: 'lightness', correctIndex: 3 },
        { baseColor: 'hsl(15, 80%, 70%)', diffColor: 'hsl(17, 80%, 70%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(225, 55%, 45%)', diffColor: 'hsl(225, 53%, 45%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(105, 65%, 60%)', diffColor: 'hsl(106, 66%, 61%)', pattern: 'mixed', correctIndex: 2 }
    ],
    17: [
        { baseColor: 'hsl(240, 70%, 60%)', diffColor: 'hsl(242, 70%, 60%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(120, 60%, 55%)', diffColor: 'hsl(120, 60%, 57%)', pattern: 'lightness', correctIndex: 0 },
        { baseColor: 'hsl(285, 65%, 50%)', diffColor: 'hsl(286, 64%, 51%)', pattern: 'mixed', correctIndex: 3 },
        { baseColor: 'hsl(45, 75%, 65%)', diffColor: 'hsl(45, 73%, 65%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(315, 80%, 70%)', diffColor: 'hsl(317, 80%, 70%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(180, 55%, 45%)', diffColor: 'hsl(180, 55%, 47%)', pattern: 'lightness', correctIndex: 2 },
        { baseColor: 'hsl(75, 70%, 60%)', diffColor: 'hsl(76, 71%, 59%)', pattern: 'mixed', correctIndex: 3 }
    ],
    18: [
        { baseColor: 'hsl(150, 75%, 60%)', diffColor: 'hsl(152, 75%, 60%)', pattern: 'hue', correctIndex: 0 },
        { baseColor: 'hsl(0, 65%, 55%)', diffColor: 'hsl(0, 63%, 55%)', pattern: 'saturation', correctIndex: 3 },
        { baseColor: 'hsl(210, 70%, 65%)', diffColor: 'hsl(210, 70%, 63%)', pattern: 'lightness', correctIndex: 1 },
        { baseColor: 'hsl(270, 60%, 50%)', diffColor: 'hsl(271, 59%, 51%)', pattern: 'mixed', correctIndex: 2 },
        { baseColor: 'hsl(90, 80%, 70%)', diffColor: 'hsl(92, 80%, 70%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(330, 55%, 45%)', diffColor: 'hsl(331, 56%, 44%)', pattern: 'mixed', correctIndex: 1 },
        { baseColor: 'hsl(165, 85%, 75%)', diffColor: 'hsl(165, 83%, 75%)', pattern: 'saturation', correctIndex: 0 }
    ],
    19: [
        { baseColor: 'hsl(105, 70%, 60%)', diffColor: 'hsl(107, 70%, 60%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(225, 60%, 55%)', diffColor: 'hsl(225, 60%, 53%)', pattern: 'lightness', correctIndex: 2 },
        { baseColor: 'hsl(300, 75%, 65%)', diffColor: 'hsl(300, 73%, 65%)', pattern: 'saturation', correctIndex: 0 },
        { baseColor: 'hsl(30, 65%, 50%)', diffColor: 'hsl(31, 64%, 51%)', pattern: 'mixed', correctIndex: 3 },
        { baseColor: 'hsl(255, 80%, 70%)', diffColor: 'hsl(257, 80%, 70%)', pattern: 'hue', correctIndex: 2 },
        { baseColor: 'hsl(135, 55%, 45%)', diffColor: 'hsl(135, 55%, 47%)', pattern: 'lightness', correctIndex: 0 },
        { baseColor: 'hsl(195, 65%, 60%)', diffColor: 'hsl(196, 66%, 59%)', pattern: 'mixed', correctIndex: 1 }
    ],
    20: [
        { baseColor: 'hsl(345, 65%, 55%)', diffColor: 'hsl(347, 65%, 55%)', pattern: 'hue', correctIndex: 3 },
        { baseColor: 'hsl(120, 70%, 60%)', diffColor: 'hsl(120, 68%, 60%)', pattern: 'saturation', correctIndex: 1 },
        { baseColor: 'hsl(60, 60%, 50%)', diffColor: 'hsl(61, 61%, 49%)', pattern: 'mixed', correctIndex: 2 },
        { baseColor: 'hsl(285, 75%, 65%)', diffColor: 'hsl(285, 75%, 63%)', pattern: 'lightness', correctIndex: 0 },
        { baseColor: 'hsl(180, 80%, 70%)', diffColor: 'hsl(182, 80%, 70%)', pattern: 'hue', correctIndex: 1 },
        { baseColor: 'hsl(15, 55%, 45%)', diffColor: 'hsl(15, 53%, 45%)', pattern: 'saturation', correctIndex: 3 },
        { baseColor: 'hsl(240, 65%, 60%)', diffColor: 'hsl(241, 64%, 61%)', pattern: 'mixed', correctIndex: 2 }
    ]
};