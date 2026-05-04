import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { FONTS, formatTime, screenHeight } from '../../utils/Constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'

const GameHeader: FC<{
    totalCount: number
    collectedcandies: number
    time: number
}> = ({ time, collectedcandies, totalCount }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image source={require('../../assets/icons/hangrope.png')} style={styles.img} />
                <ImageBackground source={require('../../assets/images/lines.jpg')} style={styles.line}>
                    <View style={styles.subContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.candiesText}>
                                🍭 {" "} {collectedcandies} /{" "}
                                <Text style={styles.totalCandiesText}>{totalCount}</Text>
                            </Text>

                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timerText}>
                                ⏱️{" "}{formatTime(time)}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </View>
    )
}

export default GameHeader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: screenHeight * 0.2,
    },
    img: {
        width: RFValue(60),
        height: RFValue(80),
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: 2,
        top: -RFValue(0),
        alignSelf: 'center'
    },
    line: {
        padding: 5,
        borderRadius: 10,
        resizeMode: 'contain',
        overflow: 'hidden',
        margin: RFValue(10),
        marginTop: RFValue(35)
    },
    subContainer: {
        backgroundColor: '#EDC1B9',
        padding: RFValue(5),
        borderRadius: RFValue(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c2978f',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'center',
    },
    candiesText: {
        fontSize: RFValue(14),
        fontFamily: FONTS.Lily,
        color: '#3A0E4C',
    },
    totalCandiesText: {
        fontSize: RFValue(12),
        fontFamily: FONTS.Lily,
        color: '#3A0E4C',
    },
    timeContainer: {
        alignItems: 'center',
        backgroundColor: '#c2978f',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    timerText: {
        fontSize: RFValue(14),
        fontFamily: FONTS.Lily,
        color: '#5B2333',
    },
})