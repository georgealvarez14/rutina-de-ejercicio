basic.show_string("RUTINA DE EJERCICIOS")
basic.show_string(" TIJERA ")
for index in range(4):
    basic.show_icon(IconNames.STICK_FIGURE)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
basic.show_string(" SENTADILLAS ")
for index2 in range(4):
    basic.show_leds("""
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        """)
    basic.show_leds("""
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        """)
basic.show_string(" DOMINADAS ")
for index3 in range(4):
    basic.show_leds("""
        # # # # #
        . # # . .
        . # # # .
        . . # . #
        . . # . .
        """)
    basic.show_leds("""
        # # # # #
        . # # # .
        . . # . #
        . . # . .
        . # . # .
        """)
basic.show_string(" ABDOMINALES ")
for index4 in range(4):
    basic.show_leds("""
        . . . . .
        . . . . .
        . # . . .
        . # . # .
        # # # . #
        """)
    basic.show_leds("""
        . . . . .
        . . # . .
        . . # # #
        . . # # .
        . . # . #
        """)
basic.show_string(" PESAS ")
for index5 in range(4):
    basic.show_leds("""
        . # . . .
        # # # . #
        # # # # #
        . # . . #
        # . # . .
        """)
    basic.show_leds("""
        . # # # #
        # # # # .
        # # . . .
        . # . . .
        # . # . .
        """)