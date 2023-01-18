import { View, Image, StyleSheet, Animated } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import Logo from './../../../assets/UniDent-logo/vector/default.svg'


import colors from '../../config/colors';
import { useEffect, useRef } from 'react';

export default function WelcomeScreen () {

    // Animation
    const FadeInView = props => {
        // Initial value for opacity
        const fadeAnim = useRef(new Animated.Value(0)).current; 

        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }).start();
        }, [fadeAnim]);

        return (
            // Custom animatable view
            <Animated.View
                style={{
                    ...props.style,
                    // Bind opacity to animated value
                    opacity: fadeAnim,
                }}>
                    {props.children}
                </Animated.View>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },

        image: {
            height: '100%',
            width: '100%',
            display: 'flex',
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            resizeMode: 'contain',

        }
    });

    return (
        // <View>
        //     <Logo width={500} height={100} fill={'#D2EAF5'}/>
        // </View>
        <View style={styles.container}>
            <FadeInView >
                <Image style={styles.image} source={require('/Users/macpro/Documents/Projects/PaulBoye-py/UniDent/UniDent/assets/UniDent-logo/default.png')}/>
            </FadeInView>
        </View>
    )
}