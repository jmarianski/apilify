import * as React from 'react';
import { Text, View } from 'react-native';

function DownloadText() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Downloaded text!</Text>
        </View>
    );
}

export default {
    name: 'Download test',
    component: DownloadText,
    icon: () => 'ios-list'
  };
